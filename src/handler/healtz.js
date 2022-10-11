const express = require("express")
const healtzService = require("../module/healtzService")

class HealtzHandler {
    constructor(healtzSvc:healtzService.HealtzService) {
        this.healtzSvc = healtzSvc
    }

    GetCheck() {
        return this.healtzSvc.check()
    }
}

exports.HealtzHandler = HealtzHandler
