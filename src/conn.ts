import { Sequelize } from "sequelize" 

export async function authenticateDb(db:Sequelize) {
    try {
      await db.authenticate();
      db.sync()
      console.log('Connection to db has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}