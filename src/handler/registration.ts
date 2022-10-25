import { Request, Response } from "express"
const express = require('express')
import { RegistrationService } from "../module/registrationService"

export class RegistrationHandler {
    registrationService:RegistrationService

    constructor(registrationService:RegistrationService) {
        this.registrationService = registrationService
    }

    async RegisterUser(req:Request, res:Response) {
        const body = req.body
        await this.registrationService.RegisterUser({
            name: body.name,
            username: body.username,
            email: body.email,
            password: body.password
        }).then((val) => {
            console.log(val)
            res.sendStatus(200)
        }, (err) => {
            console.log(err)
            res.sendStatus(400)
        })
    }
}

export * from "./registration"
