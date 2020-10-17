const PassGenX  = require('../utils/bcryptPassword.utlils')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                username: 'John',
                password: PassGenX.BpassGen('azerty1'),
                gender: 'man',
                size: '170',
                weight: "65",
                birthday: '1992-01-01',
                email: 'john@seed.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Sarah',
                password: PassGenX.BpassGen('azerty1'),
                gender: 'women',
                size: '170',
                weight: "65",
                birthday: '1993-11-11',
                email: 'sarah@seed.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Victor',
                password: PassGenX.BpassGen('azerty1'),
                gender: 'man',
                size: '175',
                weight: "75",
                birthday: '1993-10-02',
                email: 'victor@seed.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
