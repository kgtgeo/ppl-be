const express = require("express");
import { Express, Request, Response } from "express";
import { Sequelize } from "sequelize";
import { RegistrationHandler } from "./handler/registration";
import { HealtzHandler } from "./handler/healtz";
import { HealtzService } from "./module/healtzService";
import { HealtzRepository } from "./repository/healtzRepository";
import { RegistrationRepository } from "./repository/registrationRepository";
import { RegistrationService } from "./module/registrationService";
import { SellerProductRepository } from "./repository/sellerProductRepository";
import { ProductService } from "./module/productService";
import { ProductHandler } from "./handler/product";

export function getApp(conn: Sequelize) {
  const app: Express = express();
  app.use(express.json());
  // Repository
  const healtzRepository = new HealtzRepository(conn);
  const registrationRepository = new RegistrationRepository(conn);
  const sellerProductRepository = new SellerProductRepository(conn);
  // Module
  const registrationService = new RegistrationService(registrationRepository);
  const healtzService = new HealtzService(healtzRepository);
  const productService = new ProductService(sellerProductRepository);
  //  Handler
  const healtzApp = new HealtzHandler(healtzService);
  const registrationApp = new RegistrationHandler(registrationService);
  const productApp = new ProductHandler(productService);

  app.get("/healtz", async (req: Request, res: Response) => {
    healtzApp.GetCheck(req, res);
  });

  app.post("/register", async (req: Request, res: Response) => {
    registrationApp.RegisterUser(req, res);
  });

  app.get("/product/list/", async (req: Request, res: Response) => {
    productApp.GetListAllSellerProduct(req, res);
  });

  app.post("/product", async (req: Request, res: Response) => {
    productApp.CreateSellerProduct(req, res);
  });

  return app;
}

exports.getApp = getApp;
