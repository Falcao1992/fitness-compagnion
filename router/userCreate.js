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
    const {username, email, password} = req.body;
    // Check if the fields are completed
    if (email == null || username == null || password == null) {
        return res.status(400).json({error: 'missing parameters'});
    }
    // Check if username contains between 5 and 12 character
    if (username.length >= 13 || username.length <= 4) {
        return res.status(400).json({'error': 'username muste be length 5 - 12 '});
    }
    // Check if Email is valid
    if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({'error': 'email is not valid'})
    }
    // Check if password is secure
    if (!PASSWORD_REGEX.test(password)) {
        return res.status(400).json({'error': 'Password must be between 4 and 8 digits long and include at least one numeric digit.'})
    }

    asyncLib.waterfall([
        // Check if email exist in database
        function (done) {
            User.findOne({attributes: ['email'], where: {email}})
                .then((emailFound) => {
                    done(null, emailFound)
                })
                .catch((err) => {
                    return res.status(500).json({'error': 'unable to verify user'})
                })
        },
        function (emailFound, done) {
            User.findOne({attributes: ['username'], where: {username}})
                .then((userFound) => {
                    done(null, emailFound, userFound)
                })
                .catch((err) => {
                    return res.status(500).json({'error': 'unable to verify user'})
                })
        },
        // Crypt password if user not exist in database
        function (emailFound, userFound, done) {
            if (!userFound) {
                bcrypt.hash(password, 5, async (err, bcryptedPassword) => {
                    done(null, userFound, bcryptedPassword)
                })
            } else if (emailFound) {
                return res.status(409).send({'error': 'Email already exist'})
            } else {
                return res.status(409).send({'error': 'User already exist'})
            }
        },
        // Create user with new email, username and crypt password
        function (userFound, bcryptedPassword, done) {
            const newUser = User.create({
                email,
                username,
                password: bcryptedPassword,
            })
                .then((newUser) => {
                    done(newUser)
                })
                .catch((err) => {
                    return res.status(500).json({'error': 'cannot add user'})
                })
        }
    ], function (newUser) {
        if (newUser) {
            return res.status(201).json({
                'userId': newUser.id
            })
        } else {
            return res.status(500).json({'error': 'cannot add user'})
        }
    })
})

module.exports = router
