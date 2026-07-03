import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { productRequestSchema } from './dtos/productReq.js'
import { productService } from '../../application/services/productService.js'
import { ProductRepo } from '../../adapters/repo/productRepo.js'
export const productsRoutes = new Hono()

const service = new productService(new ProductRepo())

productsRoutes.get('/', async (c) => {
    return c.json(await service.getAll())
})



productsRoutes.post('/', zValidator('json', productRequestSchema), async (c) => {
    const dto = c.req.valid('json')
    return c.json(await service.create(dto))
})