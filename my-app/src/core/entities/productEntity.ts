export class Product {
    constructor(
        public readonly name: string,
        public readonly price: number,
        public readonly description?: string,
        public readonly id?: string,
        public readonly createdAt?: Date,
    ) {}
}
