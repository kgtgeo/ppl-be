const { Sequelize, DataTypes } = require("sequelize")
const { getConn } = require("../../conn")

const conn:Sequelize = getConn()

const Healtz = conn.define('healtz', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

exports.Healtz = Healtz