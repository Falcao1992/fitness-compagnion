module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.createTable('ExercisesWorkouts', {
        exerciseId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Workouts", // 'Movies' would also work
                key: 'id',
            },
            // if WourkoutId is deleted so data exerciseId in table exercisesWorkout is deleted too
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        workoutId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Exercises", // 'Actors' would also work
                key: 'id',
            },
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }),
    down: async (queryInterface, Sequelize) => queryInterface.dropTable('ExercisesWorkouts')
};
