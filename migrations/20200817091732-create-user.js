module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: true
        },
        size: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        weight: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        birthday: {
            type: Sequelize.DATE,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
}
