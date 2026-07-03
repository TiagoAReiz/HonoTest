import { Hono } from 'hono'
import { productsRoutes } from './adapters/controllers/product-controller.js'
import { serve } from '@hono/node-server'
const app = new Hono()


app.route('/products', productsRoutes)

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`http://localhost:${info.port}`)
})
export default app
