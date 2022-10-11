const express = require('express');
const healtzHandler = require('./handler/healtz')
const healtzService = require('./module/healtzService')

function getApp() {

    const app = express()
    const healtzSvc = new healtzService.HealtzService()
    const healtzApp = new healtzHandler.HealtzHandler(healtzSvc)
    app.get('/healtz', (req, res) => {
        res.send(healtzApp.GetCheck())
    })
    
    return app
}

exports.getApp = getApp