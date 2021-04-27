'use strict';
module.exports = (sequelize, DataTypes) => {
    const TeamAgent = sequelize.define(
        'TeamAgent',
        {
            teamId: DataTypes.INTEGER,
            userId: DataTypes.INTEGER,
        },
        {}
    );
    TeamAgent.associate = function (models) {
        TeamAgent.belongsTo(models.Team, { foreignKey: 'teamId' });
        TeamAgent.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return TeamAgent;
};
