import { Product } from "../../core/entities/productEntity.js"
import type { ProductRequest } from "../../adapters/controllers/dtos/productReq.js"

export class ProductMap {

    static toEntity(data: ProductRequest): Product {
        return new Product(data.name, data.price, data.description)
    }

}
