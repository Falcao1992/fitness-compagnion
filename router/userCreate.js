const express = require('express');
const bcrypt = require('bcrypt');
const asyncLib = (require('async'))
const {User} = require('../models');

const router = express.Router();

// CREATE USER
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/

router.post('/register', async (req, res) => {
    // Params
    const {username, email, password, size, weight, birthday, gender} = req.body;
    // Check if the fields are completed
    if (email == null || username == null || password == null || gender == null) {
        return res.status(400).json({msg: 'missing parameters'});
    }
    // Check if username contains between 5 and 12 character
    if (username.length >= 13 || username.length <= 4) {
        return res.status(400).json({msg: "Votre pseudo doit contenir entre 5 et 12 caractères"});
    }
    // Check if Email is valid
    if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({msg: "Cet email n'est pas valide"})
    }
    // Check if password is secure
    if (!PASSWORD_REGEX.test(password)) {
        return res.status(400).json({msg: 'Veuillez choisir un mot de passe contenant entre 4 et 8 caractères, et un caractère numérique (1234).'})
    }

    asyncLib.waterfall([
        // Check if email exist in database
        function (done) {
            User.findOne({attributes: ['email'], where: {email}})
                .then((emailFound) => {
                    done(null, emailFound)
                })
                .catch((err) => {
                    return res.status(500).json({msg: 'unable to verify email'})
                })
        },
        function (emailFound, done) {
            User.findOne({attributes: ['username'], where: {username}})
                .then((userFound) => {
                    done(null, emailFound, userFound)
                })
                .catch((err) => {
                    return res.status(500).json({msg: 'unable to verify user'})
                })
        },
        // Crypt password if user not exist in database
        function (emailFound, userFound, done) {
            if (!userFound) {
                bcrypt.hash(password, 5, async (err, bcryptedPassword) => {
                    done(null, userFound, bcryptedPassword)
                })
            } else if (emailFound) {
                return res.status(409).send({msg: 'Cet Email à déja été utilisé'})
            } else {
                return res.status(409).send({msg: "Ce Pseudo n'est pas disponible"})
            }
        },
        // Create user with new email, username and crypt password
        function (userFound, bcryptedPassword, done) {
            const newUser = User.create({
                email,
                username,
                gender,
                size,
                weight,
                birthday,
                password: bcryptedPassword,
            })
                .then((newUser) => {
                    done(newUser)
                })
                .catch((err) => {
                    return res.status(500).json({msg: 'cannot add user'})
                })
        }
    ], function (newUser) {
        if (newUser) {
            return res.status(201).json({
                'userId': newUser.id
            })
        } else {
            return res.status(500).json({msg: 'cannot add user'})
        }
    })
})

module.exports = router
