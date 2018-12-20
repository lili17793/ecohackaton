const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../secure/jwtSecret");
const router = express.Router();
const models = require("../models");

router.route("/")



  .get((req, res) => {
    models.challenge_user
      .findAll({
        where: {userId:1, isActive: true}
      })

      .then(challenge => {
        res.send(challenge);
      });
  });

module.exports = router;
