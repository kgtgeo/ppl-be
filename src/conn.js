const { Sequelize, DataTypes } = require("sequelize")

let conn:Sequelize;

async function authenticateDb(db:Sequelize) {
    conn = db
    try {
      await db.authenticate();
      console.log('Connection to db has been established successfully.');
      await db.sync({force: false, alter: false})
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

function getConn():Sequelize {
    return conn
}

exports.authenticateDb = authenticateDb
exports.getConn = getConn