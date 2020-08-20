module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
        name: DataTypes.STRING,
        duration: DataTypes.INTEGER,
        number: DataTypes.INTEGER,
        repeat: DataTypes.INTEGER,
    }, {});
    Exercise.associate = (models) => {
        //models.Exercise.belongsToMany(models.Workout, { through: 'ExerciseWorkouts' });
    };
    return Exercise;
};


