const { Sequelize, DataTypes } = require("sequelize")
const { getConn } = require("../../conn")

const conn:Sequelize = getConn()

const User = conn.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})