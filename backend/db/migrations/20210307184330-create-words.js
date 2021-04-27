'use strict';
const Sequelize = require('sequelize');
module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable('Words', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        word: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE,
        },
    });
};

module.exports.down = (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Words');
};
