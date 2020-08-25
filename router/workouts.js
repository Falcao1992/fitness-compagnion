const express = require('express');
const {Workout, DetailsExercise, DefaultExercise} = require('../models');

const router = express.Router();


// Routes Workouts

// GET workouts (details exercises and default exercises name) associate at one userId
router.get('/:userId/workouts', async (req, res) => {
    const {userId} = req.params
    const workouts = await Workout.findAll({
        where: {userId},
        include: [
            {
                model: DetailsExercise,
                include: [
                    {
                        model: DefaultExercise,
                        attributes: ['name'],
                    }
                ]
            }
        ]
    })
    res.status(200).send(workouts)
})

// GET exercises associate at one WorkoutId
router.get('/:workoutId/exercises', async (req, res) => {
    const {workoutId} = req.params
    const exercisesByWorkout = await DetailsExercise.findAll({where: {workoutId}, include: [DefaultExercise]})
    res.status(200).send(exercisesByWorkout)
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
