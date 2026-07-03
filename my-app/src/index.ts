import { Hono } from 'hono'
import { productsRoutes } from './adapters/controllers/product-controller.js'
import { serve } from '@hono/node-server'
const app = new Hono()

const welcomeStrings = [
  'Hello Hono!',
  'To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono'
]

app.route('/products', productsRoutes)

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`http://localhost:${info.port}`)
})
export default app
