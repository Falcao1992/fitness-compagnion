const express = require('express');
const {Workout} = require('../models');

const router = express.Router();


// Routes Workouts

// GET workouts associate at one userId
router.get('/:userId/workouts', async (req, res) => {
    const {userId} = req.params
    const workouts = await Workout.findAll({where: {userId}})
    res.status(200).send(workouts)
})


// PUT one user by ID
/*router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {username, size, gender, weight, birthday, email} = req.body
    await User.update({username, size, gender, weight, birthday, email}, {where: {id}})
    const userUpdated = await User.findOne({where: {id}})
    res.send(userUpdated)
})

// DELETE one user by ID
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    await User.destroy({where: {id}})
    res.send(id)
})

// GET all users
/*router.get('/', async (req, res) => {
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

 */



module.exports = router;
