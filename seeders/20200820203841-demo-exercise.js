module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Exercises', [{
      name: 'Abdos',
      duration: '30',
      number: '50',
      repeat: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Exercises', null, {});
  }
};
