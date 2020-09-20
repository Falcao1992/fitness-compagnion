module.exports = {
    up:  (queryInterface, Sequelize) => queryInterface.createTable('DetailsExercises', {
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
        DefaultExerciseId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'DefaultExercises',
                key: 'id',
            },
        },
        WorkoutId: {
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
    down:  (queryInterface, Sequelize) => queryInterface.dropTable('DetailsExercises')
};
