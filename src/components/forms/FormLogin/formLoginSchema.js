import { z } from "zod"

export const formLoginSchema = z.object({
    email: z.string().nonempty("O e-mail é obrigatório"),
    password: z.string().nonempty("A senha é obrigatória")
})