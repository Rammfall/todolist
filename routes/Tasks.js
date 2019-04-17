const express = require('express');
const cors = require('cors');
const Task = require('./../models/Task');
const Project = require('./../models/Project');
const checkToken = require('./../middleware/check-auth');
const validator = require('./../middleware/validation');

const tasks = express.Router();

tasks.use(cors());

// New task

tasks.post('/put', checkToken, validator, (req, res) => {
  const taskData = {
    name: req.body.name,
    status: 0,
    deadline: req.body.deadline,
    project_id: req.body.project_id,
  };

  Project.findOne({
    where: {
      id: req.body.project_id,
      user_id: req.userData.id,
    },
  })
    .then((project) => {
      if (project) {
        Task.create(taskData)
          .then((taskResult) => {
            res.json({ status: `Task ${taskResult.name} added in DB!` });
          })
          .catch((error) => {
            res.send(`Error: ${error}`);
          });
      } else {
        res.json({ error: 'Project isn\'t exist' });
      }
    })
    .catch((error) => {
      res.send(`Error ${error}`);
    });
});

// Update task

tasks.post('/update', checkToken, validator, (req, res) => {
  const taskData = {
    name: req.body.name,
    status: req.body.status,
    deadline: req.body.deadline,
  };

  Task.findOne({
    where: {
      id: req.body.id,
    },
  })
    .then((task) => {
      if (task) {
        Task.update(taskData, { where: { id: req.body.id } })
          .then(() => {
            res.json({ status: `Task ${req.body.id} was update with new name: ${req.body.name}` });
          })
          .catch(error => res.json({ error }));
      } else {
        res.json({ error: 'Task isn\'t exist' });
      }
    })
    .catch((error) => {
      res.json({ error });
    });
});

// Delete task

tasks.delete('/delete', checkToken, validator, (req, res) => {
  Task.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then(() => {
      res.json(`Task with id ${req.body.id} deleted`);
    })
    .catch((error) => {
      res.json({ error });
    });
});

// Get task list

tasks.post('/get', checkToken, validator, (req, res) => {
  Task.findAll({
    attributes: {
      exclude: ['project_id'],
    },
    where: {
      project_id: req.body.id,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ error });
    });
});

module.exports = tasks;
