const express = require('express');
const {User} = require('../models');
const {isAuthenticated} = require('../utils/jwt.utils')
const router = express.Router();


// Routes Users

// Get user's Data
router.get('/', isAuthenticated, async (req,res) => {
    let userId = req.isAuthenticated
    const userData = await User.findOne({
        where: {id : userId},
        attributes: {
            exclude: ["password"]
        }
    })
    res.status(200).send(userData)
})

// PUT user
router.put('/edit',isAuthenticated, async (req, res) => {
    let userId = req.isAuthenticated
    const {username, size, gender, weight, birthday, email} = req.body
    await User.update({username, size, gender, weight, birthday, email}, {where: {id : userId}})
    const userUpdated = await User.findOne({
        where: {id : userId},
        attributes: {
            exclude: ["password"]
        }
    })
    res.send(userUpdated)
})

// DELETE one user by ID
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    await User.destroy({where: {id}})
    res.send(id)
})



module.exports = router;
