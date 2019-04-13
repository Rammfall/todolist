const Sequelize = require('sequelize');
const db = require('./../database/db');

module.exports = db.sequelize.define(
  'projects',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.INTEGER,
      models: 'users',
      key: 'id',
    },
  },
  {
    timestamps: false,
  },
);
