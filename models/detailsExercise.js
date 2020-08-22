module.exports = (sequelize, DataTypes) => {
    const DetailsExercise = sequelize.define('DetailsExercise', {
        duration: DataTypes.INTEGER,
        number: DataTypes.INTEGER,
        series: DataTypes.INTEGER,
        defaultExerciseId: {
            type: DataTypes.STRING,
            references: {
                model: "DefaultExercises",
                key: 'id'
            }
        },
        workoutId: {
            type: DataTypes.STRING,
            references: {
                model: "Workout",
                key: 'id'
            }
        }
    }, {});
    DetailsExercise.associate = (models) => {
        models.DetailsExercise.belongsTo(models.defaultExercise);
        models.DetailsExercise.belongsTo(models.workout);
    };
    return DetailsExercise;
};


