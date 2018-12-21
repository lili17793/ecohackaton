const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../secure/jwtSecret");
const router = express.Router();
const models = require("../models");

router
  .route("/")

  .get((req, res) => {
    models.user
      .findOne({ where: { id: req.params.id }, includes: [models.challenge] })
      .then(user => res.json(user));
  });

module.exports = router;
