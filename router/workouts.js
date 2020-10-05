const express = require('express');
const {Workout, DetailsExercise, DefaultExercise} = require('../models');
const {isAuthenticated} = require('../utils/jwt.utils')
const router = express.Router();


// Routes Workouts

// GET workouts (details exercises and default exercises name) associate at one userId
router.get('/workouts', isAuthenticated, async (req, res) => {
    let userId = req.isAuthenticated
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

// GET One workout (details exercises and default exercises name) associate at one userId
router.get('/:userId/workouts/:id', async (req, res) => {
    const {userId, id} = req.params
    const OneWorkout = await Workout.findOne({
        where: {userId, id},
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
    res.status(200).send(OneWorkout)
})

// Create one workout
router.post('/workout/create', async (req, res) => {
    const {name, duration, date, hour, UserId} = req.body
    const newWorkout = await Workout.create({name, duration, date, hour, UserId})
    res.status(200).send(newWorkout)
})

// Put Workouts associate at one User
router.put('/:userId/workout/:id', async (req, res) => {
    const {userId, id} = req.params
    const {name, date, duration, hour} = req.body
    const workoutUpdated = await Workout.update(
        {name, date, duration, hour},
        {where: {userId, id}}
    )
    res.status(200).send(workoutUpdated)
})

// Delete one Workouts by id
router.delete('/workouts/:id', async (req, res) => {
    const {id} = req.params
    await Workout.destroy({where: {id}})
    res.status(200).send(id)
})


// Get all default exercises
router.get('/defaultExercises', async (req, res) => {
    const allDefaultExercises = await DefaultExercise.findAll()
    res.status(200).send(allDefaultExercises)
})

// Post One exercise
router.post('/detailsExercise', async (req, res) => {
    const {DefaultExerciseId, duration, number, series, WorkoutId} = req.body
    const newDetailsExercise = await DetailsExercise.create({DefaultExerciseId, duration, number, series, WorkoutId})
    res.status(200).send(newDetailsExercise)
})

// Delete one exercise by id
router.delete('/detailsExercise/:id', async (req, res) => {
    const {id} = req.params
    await DetailsExercise.destroy({where: {id}})
    res.status(200).send(id)
})

module.exports = router;
