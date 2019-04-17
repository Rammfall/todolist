const express = require('express');
const cors = require('cors');
const Project = require('./../models/Project');
const checkToken = require('./../middleware/check-auth');
const validator = require('./../middleware/validation');

const projects = express.Router();

projects.use(cors());

// New project

projects.post('/put', checkToken, validator, (req, res) => {
  const projectData = {
    name: req.body.name,
    user_id: req.userData.id,
  };

  Project.create(projectData)
    .then((projectResult) => {
      res.json({
        status: 'success',
        info: `Project ${projectResult.name} in DB!`,
        name: projectResult.name,
        id: projectResult.id,
      });
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

  Project.update(projectData, {
    where: {
      id: req.body.id,
      user_id: req.userData.id,
    },
  })
    .then(() => {
      res.json({ status: `Project ${req.body.id} was update with new name: ${req.body.name}` });
    })
    .catch(error => res.json({ error }));
});

// Delete project

projects.delete('/delete', checkToken, validator, (req, res) => {
  Project.destroy({
    where: {
      id: req.body.id,
      user_id: req.userData.id,
    },
  })
    .then(() => {
      res.json(`Project with id ${req.body.id} deleted`);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

// Get list projects

projects.post('/get', checkToken, validator, (req, res) => {
  Project.findAll({
    attributes: {
      exclude: ['user_id'],
    },
    where: {
      user_id: req.userData.id,
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
