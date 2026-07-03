import type { ProductRequest } from "../../adapters/controllers/dtos/productReq.js";
import type { Product } from "../entities/productEntity.js";

export interface IProductService {
    teste(data: ProductRequest): Product

}