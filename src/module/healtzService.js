const { HealtzRepository } = require('../repository/healtzRepository')

class HealtzService {
    constructor(healtzRepository:HealtzRepository) {
        this.healtzRepository = healtzRepository
    }

    check() {
        return this.healtzRepository.GetHealtzByName("sans")
    }
}


exports.HealtzService = HealtzService