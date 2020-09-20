const express = require('express');

const bcrypt = require('bcrypt');
const {generateTokenForUser} = require('../utils/jwt.utils');
const {User} = require('../models');

const router = express.Router();

// Route for login
router.post("/login", async (req, res) => {
    // Get Data from Request Body
    //res.setHeader('Access-Control-Allow-Origin', 'https://fitness-companion.netlify.app')
    //if(req.method === "OPTIONS") {
      //  res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type')
    //}
    const username = req.body.username;
    const password = req.body.password;
    // Check if all fields are completed
    if (username == null || password == null) {
        return res.status(400).json({msg: "missing parameter"});
    }
    // Localize User in DB with username
    await User.findOne({
        where: {username}
    })
        .then(function (userFound) {
            // If user found in DB, check the password
            if (userFound) {
                bcrypt.compare(password, userFound.password, function (
                    errBycrypt,
                    resBycrypt
                ) {
                    // If password matched send UserId and generate Token
                    if (resBycrypt) {
                        return res.status(200).json({
                            userId: userFound.id,
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
        // If error, we catch it
        .catch(function (err) {
            return res.status(500).json({msg: "unable to verify user"});
        });
});

module.exports = router
