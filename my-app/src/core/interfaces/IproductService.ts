import type { ProductRequest } from "../../adapters/controllers/dtos/productReq.js";
import type { Product } from "../entities/productEntity.js";

export interface IProductService {
    getAll(): Promise<Product[]>
    create(data: ProductRequest): Promise<Product>
    update(id: string, data: ProductRequest): Promise<Product>
    delete(id: string): Promise<Product>
}