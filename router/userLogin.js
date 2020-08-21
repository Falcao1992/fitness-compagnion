const express = require('express');

const bcrypt = require('bcrypt');
const {generateTokenForUser} = require('../utils/jwt.utils');
const {User} = require('../models');

const router = express.Router();

router.post("/login", async (req, res) => {
    // Params
    const username = req.body.username;
    const password = req.body.password;

    if (username == null || password == null) {
        return res.status(400).json({msg: "missing parameter"});
    }

    await User.findOne({
        where: {username}
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
                        return res.status(403).json({msg: "Mot de Passe Incorrect"});
                    }
                });
            } else {
                return res.status(404).json({msg: "Pseudo Introuvable"});
            }
        })
        .catch(function (err) {
            return res.status(500).json({msg: "unable to verify user"});
        });
});

module.exports = router
