// Erros de DOMÍNIO — não sabem nada de HTTP.
// Quem traduz pra status code é o handler global (app.onError).

export class DomainError extends Error {}

export class ProductNotFoundError extends DomainError {
    constructor(id: string) {
        super(`Product ${id} not found`)
        this.name = "ProductNotFoundError"
    }
}
