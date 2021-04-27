'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            nickname: DataTypes.STRING,
        },
        {}
    );
    User.associate = function (models) {
        User.hasOne(models.Team, {
            foreignKey: 'spymasterId',
            as: 'Spymaster',
        });
        User.belongsToMany(models.Team, {
            foreignKey: 'userId',
            otherKey: 'teamId',
            through: 'TeamAgent',
        });
    };
    return User;
};
