import { Sequelize } from "sequelize";
const localConfig = require("./database/configs/prod");
import { authenticateDb } from "./conn";
import { getApp } from "./app";

// db
const config = localConfig.config;
const db: Sequelize = new Sequelize({
  dialect: "postgres",
  host: config.host,
  database: config.database,
  username: config.username,
  password: config.password,
  port: config.port,
  sync: {
    force: false,
    alter: false,
  },
});
authenticateDb(db);

// Constants
const PORT: string = process.env.PORT || "4040";
const HOST: string = process.env.HOST || "0.0.0.0";

// App
const handler = getApp(db);

handler.listen(parseInt(PORT), HOST);
console.log(`Running on http://${HOST}:${PORT}`);
