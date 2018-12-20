const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/signup', (req, res) => {
    const userData = req.body;
    console.log(Object.values(userData));
    models.user.create(userData).then(user => {
        console.log(`${user.pseudo} inserted`);
        res.status(200).send(user);
    });
    // const newUser = new models.user(userData);
    // newUser.save().then((user)=> {
    //     res.status(200).json(user);
    // });
});

module.exports = router;