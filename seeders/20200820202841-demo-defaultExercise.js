module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('DefaultExercises', [
            {
                name: 'Développé couché',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Développé incliné',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Développé décliné',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ecartés haltères',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pompes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Traction',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Soulevé de terre',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Curls à la barre',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Curls haltères',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Curls poulie',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Crunch',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gainage',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Squat',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Presse à cuisse',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Squat barre guidée',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Soulevé de terre jambes tendues',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Mollets assis',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Mollets debout',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Flexion aux hatlères',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Vélo eliptique',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Course à pied',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Presse à cuisse',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Vélos traditionelle',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('DefaultExercises', null, {});
    }
};
