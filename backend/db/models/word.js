'use strict';
module.exports = (sequelize, DataTypes) => {
    const Word = sequelize.define(
        'Word',
        {
            word: DataTypes.STRING,
        },
        {}
    );
    Word.associate = function (models) {
        Word.belongsToMany(models.Game, {
            as: 'GameWords',
            through: 'GameWord',
            foreignKey: 'wordId',
            otherKey: 'gameId',
        });
    };
    return Word;
};
