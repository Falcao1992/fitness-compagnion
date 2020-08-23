module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Workouts', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        hour: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        userId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
            // if userId is deleted so data workout is deleted too
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
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
