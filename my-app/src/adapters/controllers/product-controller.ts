import { Hono } from 'hono'

export const productsRoutes = new Hono()

productsRoutes.get('/', async (c) => {
    return c.text('Products!')
})

productsRoutes.post('/', async (c) => {
    const body = await c.req.text()
    return c.text(body)
})