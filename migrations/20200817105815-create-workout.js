module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Workouts', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        duration: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        userId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Workouts'),
}
