import type { ProductRequest } from "../../adapters/controllers/dtos/productReq.js"
import { randomUUID } from "crypto"

export class Product {
    private id: string
    private name: string
    private price: number
    private description?: string
    constructor(

        name: string,
        price: number,
        description?: string
    ) {
        this.id = randomUUID()
        this.name = name
        this.price = price
        this.description = description
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getPrice(): number {
        return this.price
    }

    public getDescription(): string | undefined {
        return this.description
    }

    public setName(name: string): void {
        this.name = name
    }

    public setPrice(price: number): void {
        this.price = price
    }

    public setDescription(description: string): void {
        this.description = description
    }


}