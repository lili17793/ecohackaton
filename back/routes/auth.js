const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/signup', (req, res) => {
    const userData = req.body;
    models.user.create(userData).then(user => {
        res.status(200).send(user);
    });
});

module.exports = router;