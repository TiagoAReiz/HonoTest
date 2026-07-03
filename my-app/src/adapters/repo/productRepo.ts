import type { IProductRepo } from "../../core/interfaces/IproductRepo.js"
import type { Product } from "../../core/entities/productEntity.js"
import { ProductMap } from "../../application/mappers/productMap.js"
import { ProductNotFoundError } from "../../core/errors.js"
import { prisma } from "../db/prisma.js"
import { Prisma } from "../../generated/prisma/client.js"

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

    async findById(id: string): Promise<Product | null> {
        const row = await prisma.product.findUnique({ where: { id } })
        return row ? ProductMap.toDomain(row) : null
    }

    async update(id: string, product: Product): Promise<Product> {
        const updated = await prisma.product.update({
            where: { id },
            data: ProductMap.toPersistence(product),
        })
        return ProductMap.toDomain(updated)
    }

    async delete(id: string): Promise<Product> {
        try {
            const deleted = await prisma.product.delete({ where: { id } })
            return ProductMap.toDomain(deleted)
        } catch (e) {
            // P2025 = "registro não encontrado". Erro TÉCNICO do Prisma
            // traduzido aqui (no adapter) pra erro de DOMÍNIO.
            if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025") {
                throw new ProductNotFoundError(id)
            }
            throw e
        }
    }
}
