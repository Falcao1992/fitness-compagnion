module.exports = (sequelize, DataTypes) => {
    const DefaultExercise = sequelize.define('DefaultExercise', {
        name: DataTypes.STRING,
    }, {});
    DefaultExercise.associate = (models) => {
        models.DefaultExercise.hasMany(models.DetailsExercise);
    };
    return DefaultExercise;
};
