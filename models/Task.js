const Sequelize = require('sequelize');
const db = require('./../database/db');

module.exports = db.sequelize.define(
  'task',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.INTEGER,
    },
    prioritize: {
      type: Sequelize.INTEGER,
    },
    deadline: {
      type: Sequelize.DATE,
    },
    project_id: {
      type: Sequelize.INTEGER,
      models: 'projects',
      key: 'id',
    },
  },
  {
    timestamps: false,
  },
);
