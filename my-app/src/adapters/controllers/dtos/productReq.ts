import { z } from 'zod'

export const productRequestSchema = z.object({
    name: z.string().min(1),
    price: z.number().positive(),
    description: z.string().optional(),
})


export type ProductRequest = z.infer<typeof productRequestSchema>