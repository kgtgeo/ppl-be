import { Sequelize, DataTypes, Model, ModelCtor } from "sequelize";
import { Repository } from "./base/repository";

export class HealtzRepository extends Repository {
  constructor(conn: Sequelize) {
    super(conn);
  }

  async GetHealtzByName(name) {
    const healtzs: Model[] = await this.healtz.findAll({
      where: {
        name: name,
      },
      limit: 1,
    });
    const h = healtzs.pop();
    const values = h.get({
      plain: true,
    });
    return values;
  }
}

exports.HealtzRepository = HealtzRepository;
