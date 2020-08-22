module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define('Workout', {
        name: DataTypes.STRING,
        duration: DataTypes.INTEGER,
        date: DataTypes.DATE,
        userId: DataTypes.INTEGER,
    }, {});
    Workout.associate = (models) => {
        models.Workout.belongsTo(models.User,  {onDelete: 'cascade', hooks:true});
        models.Workout.hasMany(models.DetailsExercise);
    };
    return Workout;
};

