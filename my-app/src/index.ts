import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { productsRoutes } from './adapters/controllers/product-controller.js'
import { serve } from '@hono/node-server'
import { DomainError, ProductNotFoundError } from './core/errors.js'
const app = new Hono()


app.route('/products', productsRoutes)

// handler global de erros: traduz DOMÍNIO -> HTTP num lugar só
app.onError((err, c) => {
  if (err instanceof ProductNotFoundError) return c.json({ error: err.message }, 404)
  if (err instanceof DomainError) return c.json({ error: err.message }, 400)
  if (err instanceof HTTPException) return err.getResponse()

  console.error(err) // erro inesperado: loga e esconde o detalhe
  return c.json({ error: 'Internal Server Error' }, 500)
})

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`http://localhost:${info.port}`)
})
export default app
