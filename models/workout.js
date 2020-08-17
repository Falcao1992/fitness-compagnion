module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define('Workout', {
        duration: DataTypes.INTEGER,
        date: DataTypes.DATE,
        userId: DataTypes.INTEGER
    }, {});
    Workout.associate = (models) => {
        models.Workout.hasMany(models.Exercise, {onDelete: 'CASCADE', hooks: true, foreignKey: {allowNull: false}});
        models.Workout.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            },
        });
    };
    return Workout;
};

