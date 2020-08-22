module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.createTable('DetailsExercises', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        duration: {
            type: Sequelize.INTEGER
        },
        number: {
            type: Sequelize.INTEGER
        },
        series: {
            type: Sequelize.INTEGER
        },
        defaultExerciseId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'DefaultExercises',
                key: 'id',
            },
        },
        workoutId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'Workouts',
                key: 'id',
            },
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
    down: async (queryInterface, Sequelize) => queryInterface.dropTable('DetailsExercises')
};
