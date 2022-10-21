import { Sequelize, DataTypes, Model, ModelCtor} from "sequelize" 

export class HealtzRepository {
    conn:Sequelize
    healtz:ModelCtor<Model<any,any>>

    constructor(conn:Sequelize) {
      this.conn = conn
      this.healtz = conn.define('healtz', 
      {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
      },
      {
        freezeTableName: true
      }
      )
    }

    async GetHealtzByName(name) {
      const healtzs:Model[]=  await this.healtz.findAll({
        where: {
            name: name
        },
        limit: 1
      })  
      const h = healtzs.pop()
      const values =  h.get({
        plain: true
      })
      return values
    }
}

exports.HealtzRepository = HealtzRepository