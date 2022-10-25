import { Sequelize, DataTypes, Model, ModelCtor, Error } from "sequelize";
const uniqid = require("uniqid");

export class RegistrationRepository {
  conn: Sequelize;
  users: ModelCtor<Model<any, any>>;

  constructor(conn: Sequelize) {
    this.conn = conn;
    this.users = conn.define(
      "users",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.CHAR,
          unique: true,
        },
        name: {
          type: DataTypes.CHAR,
        },
        username: {
          type: DataTypes.CHAR,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        verification_status: {
          type: DataTypes.CHAR,
        },
      },
      {
        freezeTableName: true,
      }
    );
  }

  async CreateUser(user: {
    name: string;
    username: string;
    email: string;
    password: string;
  }) {
    const userId = uniqid();
    const username = uniqid();
    await this.users
      .create({
        user_id: userId,
        username: username,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .catch((err) => {
        throw err;
      });
  }
}
exports.RegistrationRepository = RegistrationRepository;
