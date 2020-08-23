module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Workouts', [
            {
                name: 'ma seance du matin',
                duration: '120',
                date: '2020-08-20',
                hour: '10:00:00',
                userId: '1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'ma seance du soir',
                duration: '10',
                date: '2020-08-20',
                hour: '18:00:00',
                userId: '1',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Workouts', null, {});
    }
};
