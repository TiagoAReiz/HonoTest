import type { ProductRequest } from "../../adapters/controllers/dtos/productReq.js"
import type { Product } from "../../core/entities/productEntity.js"
import type { IProductRepo } from "../../core/interfaces/IproductRepo.js"
import type { IProductService } from "../../core/interfaces/IproductService.js"
import { ProductMap } from "../mappers/productMap.js"

export class productService implements IProductService {
    constructor(private repo: IProductRepo) { }
    getAll(): Promise<Product[]> {
        return this.repo.getAll()
    }
    create(data: ProductRequest): Promise<Product> {
        const product = ProductMap.toEntity(data)
        return this.repo.save(product)
    }
    update(id: string, data: ProductRequest): Promise<Product> {
        const product = ProductMap.toEntity(data)
        return this.repo.update(id, product)
    }
    delete(id: string): Promise<Product> {
        return this.repo.delete(id)
    }
}