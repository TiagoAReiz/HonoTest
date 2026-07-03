import type { Product } from "../entities/productEntity.js"

export interface IProductRepo {
    save(product: Product): Promise<Product>
    getAll(): Promise<Product[]>
    findById(id: string): Promise<Product | null>
    update(id: string, product: Product): Promise<Product>
    delete(id: string): Promise<Product>
}