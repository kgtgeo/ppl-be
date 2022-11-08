import { SellerProductRepository } from "../repository/sellerProductRepository";

export class ProductService {
  sellerProductRepository: SellerProductRepository;

  constructor(sellerProductRepository: SellerProductRepository) {
    this.sellerProductRepository = sellerProductRepository;
  }

  GetListAllSellerProduct() {
    return this.sellerProductRepository.GetListAllSellerProduct();
  }
}
