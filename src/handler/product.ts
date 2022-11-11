import { Request, Response } from "express";
import { ProductService } from "../module/productService";

export class ProductHandler {
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  async GetListAllSellerProduct(req: Request, res: Response) {
    const sellerProductRes =
      await this.productService.GetListAllSellerProduct();
    res.send(sellerProductRes);
  }

  async CreateSellerProduct(req: Request, res: Response) {
    const body = req.body;
    await this.productService.CreateSellerProduct({
      user_id: body.user_id,
      name: body.name,
      description: body.description,
      price: body.price,
      stock: body.stock
    }).then(
      () => {
        res.sendStatus(200);
      },
      (err) => {
        console.log(err)
        res.sendStatus(400);
      }
    );
  }
}

export * from "./product";
