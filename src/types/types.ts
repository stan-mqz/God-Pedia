import { z } from "zod";

export const godSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    image: z.string(),
    attack: z.number(),
    defense: z.number(),
    speed: z.number(),
    health: z.number(),
    mana: z.number(),
    abilities: z.array(
        z.object({
            _id: z.string(),
            name: z.string(),
            description: z.string(),
            damage: z.number()
        })
    ),
    items: z.array(
        z.object({
            _id: z.string(),
            name: z.string(),
            description: z.string(),
            type: z.string(),
            effect: z.string(),
        })
    )
})

export const godsSchema = z.array(godSchema)
export type God = z.infer<typeof godSchema>
