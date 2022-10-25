const express = require('express')
import { Express, Request, Response } from "express"
import { Sequelize } from "sequelize"
import { RegistrationHandler } from "./handler/registration"
import  { HealtzHandler } from "./handler/healtz"
import { HealtzService } from "./module/healtzService"
import { HealtzRepository } from "./repository/healtzRepository"
import { RegistrationRepository } from "./repository/registrationRepository"
import { RegistrationService } from "./module/registrationService"

export function getApp(conn:Sequelize) {

    const app:Express = express()
    app.use(express.json())
    // Repository
    const healtzRepository = new HealtzRepository(conn)
    const registrationRepository = new RegistrationRepository(conn)
    // Module
    const registrationService = new RegistrationService(registrationRepository)
    const healtzService = new HealtzService(healtzRepository)
    //  Handler
    const healtzApp = new HealtzHandler(healtzService)
    const registrationApp = new RegistrationHandler(registrationService)
    app.get('/healtz', async(req, res:Response) => {
        const h = await healtzApp.GetCheck()
        res.send(h)
    })

    app.post('/register', async(req:Request, res:Response) => {
        registrationApp.RegisterUser(req, res)
    })
    
    return app
}

exports.getApp = getApp