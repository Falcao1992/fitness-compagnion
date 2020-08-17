const express = require('express');
const bcrypt = require('bcrypt');
const asyncLib = (require('async'))
const {isAuthenticated} = require('../utils/jwt.utils');
const {generateTokenForUser} = require('../utils/jwt.utils');
const {User} = require('../models');

const router = express.Router();

// Routes Users

// Login user
router.post("/login", async (req, res) => {
    // Params
    const username = req.body.username;
    const password = req.body.password;

    if (username == null || password == null) {
        return res.status(400).json({error: "missing parameter"});
    }

    await User.findOne({
        where: {username: username}
    })
        .then(function (userFound) {
            if (userFound) {
                bcrypt.compare(password, userFound.password, function (
                    errBycrypt,
                    resBycrypt
                ) {
                    if (resBycrypt) {
                        return res.status(200).json({
                            userId: userFound,
                            token: generateTokenForUser(userFound)
                        });
                    } else {
                        return res.status(403).json({error: "invalid password"});
                    }
                });
            } else {
                return res.status(404).json({error: "user not exist in DB"});
            }
        })
        .catch(function (err) {
            return res.status(500).json({error: "unable to verify user"});
        });
});

// GET all users
router.get('/', async (req, res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
})
// GET one user by ID
router.get('/:id', async (req, res) => {
    const {id} = req.params
    const user = await User.findOne({where: {id}})
    res.send(user)
})
// POST new user
router.post('/', async (req, res) => {
    const {firstName, lastName, size, weight, dateBirth, email} = req.body
    const user = User.create({firstName, lastName, size, weight, dateBirth, email})
    res.send(user)
})
// PUT one user by ID
router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {firstName, lastName, size, weight, dateBirth, email} = req.body
    await User.update({firstName, lastName, size, weight, dateBirth, email}, {where: {id}})
    const userUpdated = await User.findOne({where: {id}})
    res.send(userUpdated)
})

// DELETE one user by ID
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    await User.destroy({where: {id}})
    res.send(id)
})

module.exports = router;
