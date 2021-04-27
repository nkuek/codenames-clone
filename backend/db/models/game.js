'use strict';
module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define(
        'Game',
        {
            name: DataTypes.STRING,
            isFinished: DataTypes.BOOLEAN,
            team1Id: DataTypes.INTEGER,
            team2Id: DataTypes.INTEGER,
        },
        {}
    );
    Game.associate = function (models) {
        Game.belongsTo(models.Team, { foreignKey: 'team1Id', as: 'team1' });
        Game.belongsTo(models.Team, { foreignKey: 'team2Id', as: 'team2' });
        Game.belongsToMany(models.Word, {
            as: 'GameWords',
            through: 'GameWord',
            foreignKey: 'gameId',
            otherKey: 'wordId',
        });
    };
    return Game;
};
