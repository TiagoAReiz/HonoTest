import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { productRequestSchema } from './dtos/productReq.js'
import { productService } from '../../application/services/productService.js'
export const productsRoutes = new Hono()

const service = new productService()

productsRoutes.get('/', async (c) => {
    return c.text('Products!')
})



productsRoutes.post('/', zValidator('json', productRequestSchema), async (c) => {
    const dto = c.req.valid('json')
    return c.json(service.teste(dto))
})