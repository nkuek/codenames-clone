const express = require('express');
const asyncHandler = require('express-async-handler');
const Sequelize = require('sequelize');
const router = express.Router();
const { Word } = require('../../db/models');

router.get(
    '/',
    asyncHandler(async (_req, res) => {
        const wordList = await Word.findAll({
            order: Sequelize.fn('RANDOM'),
            limit: 3,
        });
        const urlString = wordList
            .map((word) => word.word)
            .join('-')
            .toLowerCase();
        return res.json({ urlString });
    })
);

module.exports = router;
