import { Product } from "../../core/entities/productEntity.js"
import type { ProductRequest } from "../../adapters/controllers/dtos/productReq.js"
import type { Prisma, Product as ProductRow } from "../../generated/prisma/client.js"

export class ProductMap {
    // HTTP request -> entidade de domínio
    static toEntity(data: ProductRequest): Product {
        return new Product(data.name, data.price, data.description)
    }

    // domínio -> input tipado do Prisma (o que vai em `data`)
    static toPersistence(product: Product): Prisma.ProductCreateInput {
        return {
            name: product.name,
            price: product.price,
            description: product.description,
        }
    }

    // linha do banco -> entidade de domínio
    static toDomain(row: ProductRow): Product {
        return new Product(
            row.name,
            row.price,
            row.description ?? undefined,
            row.id,
            row.createdAt,
        )
    }
}
