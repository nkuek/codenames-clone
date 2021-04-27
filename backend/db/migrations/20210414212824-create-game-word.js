'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('GameWords', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            wordId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Words' },
            },
            gameId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Games' },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('GameWords');
    },
};
