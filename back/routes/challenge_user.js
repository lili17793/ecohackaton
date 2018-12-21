const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../secure/jwtSecret");
const router = express.Router();
const models = require("../models");

router
  .route("/")

  .get((req, res) => {
   const sql = 'SELECT c.name, c.description, c.duration FROM challenge c, challenge_user cu WHERE cu.isValidated=false OR c.id!=cu.challengeId';
   
  });

module.exports = router;
