const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myDb', 'matheusosan', 'm12345', {
  host: 'localhost',
  dialect: 'postgres',
  timestamps: true,
  
});