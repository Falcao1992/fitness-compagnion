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
        models.DetailsExercise.belongsTo(models.DefaultExercise);
        models.DetailsExercise.belongsTo(models.Workout);
    };
    return DetailsExercise;
};


