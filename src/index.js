const { Sequelize } = require('sequelize')
const localConfig = require("./database/configs/local")
const conn = require("./conn")
const app = require("./app")

// db
const config = localConfig.config
const db:Sequelize = new Sequelize({
  dialect: 'postgres',
  host: config.host,
  database: config.database,
  username: config.username,
  password: config.password,
  port: config.port
})
conn.authenticateDb(db)

// Constants
const PORT = process.env.PORT || 4040;
const HOST = process.env.HOST || '0.0.0.0';

// App
const handler = app.getApp()

handler.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);