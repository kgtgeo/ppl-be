import { HealtzRepository } from "../repository/healtzRepository";

export class HealtzService {
  healtzRepository: HealtzRepository;

  constructor(healtzRepository: HealtzRepository) {
    this.healtzRepository = healtzRepository;
  }

  check() {
    return this.healtzRepository.GetHealtzByName("sans");
  }
}
