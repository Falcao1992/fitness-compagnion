module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
        name: DataTypes.STRING,
        duration: DataTypes.INTEGER,
        number: DataTypes.INTEGER,
        repeat: DataTypes.INTEGER,
        workoutId: DataTypes.INTEGER
    }, {});
    Exercise.associate = (models) => {
        models.Exercise.hasMany(models.Workout);
        models.Exercise.belongsTo(models.Workout, {
            foreignKey: {
                allowNull: false,
            },
        });
    };
    return Exercise;
};


