module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('DefaultExercises', [
            {
                name: 'Abdominaux',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pompes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tractions',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('DefaultExercises', null, {});
    }
};
