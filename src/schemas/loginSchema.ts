import { z } from "zod"
import { emailSchema, passwordSchema } from "./userSchema"

export const userLoginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
})

export type UserFormLogin = z.infer<typeof userLoginSchema>
