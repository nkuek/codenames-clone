'use strict';
module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define(
        'Team',
        {
            spymasterId: DataTypes.INTEGER,
        },
        {}
    );
    Team.associate = function (models) {
        Team.belongsTo(models.User, { foreignKey: 'spymasterId' });
        Team.belongsToMany(models.User, {
            as: 'Agents',
            through: 'TeamAgent',
            foreignKey: 'teamId',
            otherKey: 'userId',
        });
        Team.hasOne(models.Game, { foreignKey: 'team1Id', as: 'team1' });
        Team.hasOne(models.Game, { foreignKey: 'team2Id', as: 'team2' });
    };
    return Team;
};
