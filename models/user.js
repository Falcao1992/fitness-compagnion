module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false},
        gender: {type: DataTypes.STRING, allowNull: false},
        size: {type: DataTypes.INTEGER, allowNull: true},
        weight: {type: DataTypes.INTEGER, allowNull: true},
        birthday: {type: DataTypes.DATE, allowNull: true},
        email: {type: DataTypes.STRING, allowNull: false}
    }, {});
    User.associate = (models) => {
        models.User.hasMany(models.Workout);
    };
    return User;
};
