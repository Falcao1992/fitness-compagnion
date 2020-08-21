module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ExercisesWorkouts', [{
            exerciseId: '1',
            workoutId: '1',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ExercisesWorkouts', null, {});
    }
};
