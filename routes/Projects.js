const express = require('express');
const cors = require('cors');
const User = require('./../models/User');
const Project = require('./../models/Project');
const checkToken = require('./../middleware/check-auth');
const validator = require('./../middleware/validation');

const projects = express.Router();

projects.use(cors());

// New project

projects.post('/put', checkToken, validator, (req, res) => {
  const projectData = {
    name: req.body.name,
    user_id: req.body.user_id,
  };

  User.findOne({
    where: {
      id: req.body.user_id,
    },
  })
    .then((user) => {
      if (user) {
        Project.create(projectData)
          .then((projectResult) => {
            res.json({ status: `Project ${projectResult.name} in DB!` });
          })
          .catch((error) => {
            res.json({ error });
          });
      } else {
        res.json({ error: 'User isn\'t exist' });
      }
    })
    .catch((error) => {
      res.json({ error });
    });
});

// Update project

projects.post('/update', checkToken, validator, (req, res) => {
  const projectData = {
    name: req.body.name,
  };

  Project.findOne({
    where: {
      id: req.body.id,
    },
  })
    .then((project) => {
      if (project) {
        Project.update(projectData, { where: { id: req.body.id } })
          .then(() => {
            res.json({ status: `Project ${req.body.id} was update with new name: ${req.body.name}` });
          })
          .catch(error => res.json({ error }));
      } else {
        res.json({ error: 'Project isn\' exist' });
      }
    })
    .catch((error) => {
      res.json({ error });
    });
});

// Delete project

projects.delete('/delete', checkToken, validator, (req, res) => {
  Project.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then(() => {
      res.json(`Project with id ${req.body.id} deleted`);
    })
    .catch((error) => {
      res.json({ error });
    });
});

// Get list projects

projects.post('/get', checkToken, validator, (req, res) => {
  Project.findAll({
    attributes: {
      exclude: ['user_id'],
    },
    where: {
      user_id: req.body.user_id,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ error });
    });
});

module.exports = projects;
