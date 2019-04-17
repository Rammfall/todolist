const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/User');
const validator = require('./../middleware/validation');

const users = express.Router();

users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post('/register', validator, (req, res) => {
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
            .then((userResult) => {
              res.json({ status: `${userResult.email} registered` });
            })
            .catch((error) => {
              res.send(`Error ${error}`);
            });
        });
      } else {
        res.json({ error: 'User already exist' });
      }
    })
    .catch((err) => {
      res.send(`Error ${err}`);
    });
});

users.post('/login', validator, (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: '24h',
          });

          res.json({ status: 'success', token });
        } else {
          res.json({ status: 'error', info: 'Wrong password' });
        }
      } else {
        res.json({ status: 'error', info: 'User does not exist' });
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

module.exports = users;
