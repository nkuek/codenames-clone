'use strict';
module.exports = (sequelize, DataTypes) => {
    const GameWord = sequelize.define(
        'GameWord',
        {
            wordId: DataTypes.INTEGER,
            gameId: DataTypes.INTEGER,
        },
        {}
    );
    GameWord.associate = function (models) {
        GameWord.belongsTo(models.Word, { foreignKey: 'wordId' });
        GameWord.belongsTo(models.Game, { foreignKey: 'gameId' });
    };
    return GameWord;
};
