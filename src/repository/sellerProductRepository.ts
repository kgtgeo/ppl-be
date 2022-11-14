import { Sequelize, DataTypes, Model, ModelCtor } from "sequelize";
const uniqid = require("uniqid");

const emptyStock = 0;
const productSerial = "PRODUCT-";

export class SellerProductRepository {
  conn: Sequelize;
  sellerProduct: ModelCtor<Model<any, any>>;

  constructor(conn: Sequelize) {
    this.conn = conn;
    this.sellerProduct = conn.define(
      "seller_product",
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        product_id: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        user_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
        class: {
          type: DataTypes.CHAR,
        },
        order: {
          type: DataTypes.CHAR,
        },
        family: {
          type: DataTypes.CHAR,
        },
        genus: {
          type: DataTypes.CHAR,
        },
        species: {
          type: DataTypes.CHAR,
        },
        race: {
          type: DataTypes.CHAR,
        },
        price: {
          type: DataTypes.CHAR,
        },
        stock: {
          type: DataTypes.INTEGER,
          defaultValue: emptyStock,
        },
        image_url: {
          type: DataTypes.CHAR,
        },
      },
      {
        freezeTableName: true,
      }
    );
  }

  async GetListAllSellerProduct() {
    const sellerProducts: Model[] = await this.sellerProduct.findAll({
      limit: 100,
    });
    return sellerProducts;
  }

  async CreateSellerProduct(sellerProduct: {
    user_id: string;
    name: string;
    description: string;
    price: string;
    stock: number;
  }) {
    const productId = await this.sellerProduct
      .create({
        product_id: `${productSerial}${uniqid()}`,
        user_id: sellerProduct.user_id,
        name: sellerProduct.name,
        description: sellerProduct.description,
        price: sellerProduct.price,
        stock: sellerProduct.stock,
      })
      .catch((err) => {
        throw err;
      });
  }
}

exports.SellerProductRepository = SellerProductRepository;
