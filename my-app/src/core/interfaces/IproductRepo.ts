import type { Product } from "../entities/productEntity.js"

export interface IProductRepo {
    save(product: Product): Promise<Product>
}