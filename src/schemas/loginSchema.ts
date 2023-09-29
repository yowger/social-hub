import { z } from "zod"
import { emailSchema, passwordSchema } from "./commonSchema"

export const userLoginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
})

export type UserFormLogin = z.infer<typeof userLoginSchema>
