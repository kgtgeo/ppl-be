import { SellerProductRepository } from "../repository/sellerProductRepository";

export class ProductService {
  sellerProductRepository: SellerProductRepository;

  constructor(sellerProductRepository: SellerProductRepository) {
    this.sellerProductRepository = sellerProductRepository;
  }

  async GetListAllSellerProduct() {
    return await this.sellerProductRepository.GetListAllSellerProduct();
  }

  async CreateSellerProduct(sellerProduct: {
    user_id: string;
    name: string;
    description: string;
    price: string;
    stock: number;
  }) {
    if (sellerProduct.user_id === "" || sellerProduct.user_id === undefined || sellerProduct.name === "" || sellerProduct.name === undefined){
      throw Error("bad request");
    }
    return await this.sellerProductRepository.CreateSellerProduct(sellerProduct)
    .catch((err: Error) => {
      throw err;
    });
  }
}
