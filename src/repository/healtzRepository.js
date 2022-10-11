const { Sequelize, DataTypes } = require("sequelize")
const { Healtz } = require('../repository/entity/healtz')

class HealtzRepository {
    GetHealtzByName(name) {
      return Healtz.findAll({
        where: {
            name: name
        },
        limit: 1
      })  
    }
}

exports.HealtzRepository = HealtzRepository