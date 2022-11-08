import { Request, Response } from "express";
import { ProductService } from "../module/productService";

export class ProductHandler {
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  async GetListAllSellerProduct(req: Request, res: Response) {
    const sellerProductRes = await this.productService.GetListAllSellerProduct();
    res.send(sellerProductRes);
  }
}

export * from "./product";
