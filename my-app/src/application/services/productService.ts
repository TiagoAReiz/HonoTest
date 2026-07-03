import type { ProductRequest } from "../../adapters/controllers/dtos/productReq.js"
import type { IProductService } from "../../core/interfaces/IproductService.js"
import { ProductMap } from "../mappers/productMap.js"

export class productService implements IProductService {
    constructor() { }
    teste(data: ProductRequest) {
        const product = ProductMap.toEntity(data)
        console.log(product)
        return product
    }
}