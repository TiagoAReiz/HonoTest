import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // usado pelos comandos de migration (migrate, db push, studio)
    url: env('DATABASE_URL'),
  },
})
