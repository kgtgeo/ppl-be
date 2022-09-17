'use strict';
const { Sequelize } = require('sequelize')
const express = require('express');

// db
const db = new Sequelize({
  dialect: 'mysql',
  host: 'sql6.freemysqlhosting.net',
  database: 'sql6520344',
  username: 'sql6520344',
  password: 'Pu5F2I7sqf',
  port: 3306
})

async function authenticateDb(db) {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
authenticateDb(db)

// Constants
const PORT = 4040;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);