module.exports = (sequelize, DataTypes) => {
    const DetailsExercise = sequelize.define('DetailsExercise', {
        duration: DataTypes.INTEGER,
        number: DataTypes.INTEGER,
        series: DataTypes.INTEGER,
        DefaultExerciseId: {
            type: DataTypes.STRING,
            references: {
                model: "DefaultExercises",
                key: 'id'
            }
        },
        WorkoutId: {
            type: DataTypes.STRING,
            references: {
                model: "Workouts",
                key: 'id'
            }
        }
    }, {});
    DetailsExercise.associate = (models) => {
        models.DetailsExercise.belongsTo(models.DefaultExercise);
        models.DetailsExercise.belongsTo(models.Workout);
    };
    return DetailsExercise;
};


