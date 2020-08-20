module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Workouts', [{
            duration: '120',
            date: '2020-08-20',
            userId: '1',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Workouts', null, {});
    }
};
