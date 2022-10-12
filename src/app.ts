const express = require('express')
import { Response } from "express"
import { Sequelize } from "sequelize"
import  { HealtzHandler } from "./handler/healtz"
import { HealtzService } from "./module/healtzService"
import { HealtzRepository } from "./repository/healtzRepository"

export function getApp(conn:Sequelize) {

    const app = express()
    const healtzRepository = new HealtzRepository(conn)
    const healtzService = new HealtzService(healtzRepository)
    const healtzApp = new HealtzHandler(healtzService)
    app.get('/healtz', async(req, res:Response) => {
        const h = await healtzApp.GetCheck()
        res.send(h)
    })
    
    return app
}

exports.getApp = getApp