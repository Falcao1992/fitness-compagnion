module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.createTable('Exercises', {
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
            number: {
                type: Sequelize.INTEGER
            },
            repeat: {
                type: Sequelize.INTEGER
            },
            workoutId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Workouts',
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
    down: async (queryInterface, Sequelize) => queryInterface.dropTable('Exercises')
};
