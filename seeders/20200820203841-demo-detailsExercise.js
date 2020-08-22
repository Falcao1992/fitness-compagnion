module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('DetailsExercises', [
            {
                defaultExerciseId: '1',
                workoutId: '1',
                duration: '30',
                series: '3',
                number: '20',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                workoutId: '2',
                defaultExerciseId: '2',
                duration: '15',
                series: '5',
                number: '20',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                workoutId: '2',
                defaultExerciseId: '3',
                duration: '30',
                series: '1',
                number: '10',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('DetailsExercises', null, {});
    }
};
