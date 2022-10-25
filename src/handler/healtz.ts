import { Request, Response } from "express";
import { HealtzService } from "../module/healtzService";

export class HealtzHandler {
  healtzService: HealtzService;

  constructor(healtzService: HealtzService) {
    this.healtzService = healtzService;
  }
  async GetCheck(req: Request, res: Response) {
    const healthRes = await this.healtzService.check();
    res.send(healthRes);
  }
}

export * from "./healtz";
