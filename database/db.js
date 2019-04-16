const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('heroku_8806a5285f4acb1', 'b11c7b57279a0f', '96c254ad', {
  host: 'us-cdbr-iron-east-02.cleardb.net',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
