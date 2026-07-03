import type { IProductRepo } from "../../core/interfaces/IproductRepo.js"
import type { Product } from "../../core/entities/productEntity.js"
import { ProductMap } from "../../application/mappers/productMap.js"
import { prisma } from "../db/prisma.js"

export class ProductRepo implements IProductRepo {
    async save(product: Product): Promise<Product> {
        const created = await prisma.product.create({
            data: ProductMap.toPersistence(product),
        })
        return ProductMap.toDomain(created)
    }

    async getAll(): Promise<Product[]> {
        const rows = await prisma.product.findMany()
        return rows.map(ProductMap.toDomain)
    }

    async update(id: string, product: Product): Promise<Product> {
        const updated = await prisma.product.update({
            where: { id },
            data: ProductMap.toPersistence(product),
        })
        return ProductMap.toDomain(updated)
    }

    async delete(id: string): Promise<Product> {
        const deleted = await prisma.product.delete({ where: { id } })
        return ProductMap.toDomain(deleted)
    }
}
