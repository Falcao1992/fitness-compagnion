module.exports = (sequelize, DataTypes) => {
    const ExerciseWorkouts = sequelize.define('ExercisesWorkouts', {
        ExerciseId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Workouts", // 'Movies' would also work
                key: 'id'
            }
        },
        WorkoutId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Exercises", // 'Actors' would also work
                key: 'id'
            }
        }
    });
    ExerciseWorkouts.associate = (models) => {
        models.Exercise.belongsToMany(models.Workout, { through: 'ExercisesWorkouts' });
        models.Workout.belongsToMany(models.Exercise, { through: 'ExercisesWorkouts' });
    };
    return ExerciseWorkouts;
};
