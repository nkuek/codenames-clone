'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Games', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            isFinished: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            team1Id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Teams' },
            },
            team2Id: {
                type: Sequelize.INTEGER,
                references: { model: 'Teams' },
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
        return queryInterface.dropTable('Games');
    },
};
