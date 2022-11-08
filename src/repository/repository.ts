import { Sequelize, DataTypes, Model, ModelCtor } from "sequelize";

export class Repository {
  conn: Sequelize;
  healtz: ModelCtor<Model<any, any>>;

  constructor(conn: Sequelize) {
    this.conn = conn;
    this.healtz = conn.define(
      "healtz",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
      }
    );
  }
}

exports.Repository = Repository;
