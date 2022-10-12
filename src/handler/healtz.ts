import { HealtzService } from "../module/healtzService"

export class HealtzHandler {
    healtzService:HealtzService

    constructor(healtzService:HealtzService) {
        this.healtzService = healtzService
    }
    async GetCheck() {
        return await this.healtzService.check()
    }
}

export * from "./healtz"
