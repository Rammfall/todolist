const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/User');

const users = express.Router();

users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post('/register', (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
  };

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(() => {
              res.json({ status: `${user.email} registered` });
            })
            .catch(() => {
              res.send(`Error ${err}`);
            });
        });
      } else {
        res.json({ error: 'Users already exist' });
      }
    })
    .catch((err) => {
      res.send(`Error ${err}`);
    });
});

module.exports = users;
