import { z } from "zod"
import { emailSchema, nameSchema } from "./userSchema"

const strongPasswordSchema = z
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(50, "Password cannot exceed 50 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")

const confirmPassword = z.string()

export const userRegisterSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    password: strongPasswordSchema,
})

export const userFormRegisterSchema = userRegisterSchema
    .extend({
        confirmPassword,
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    })

export type UserFormRegister = z.infer<typeof userFormRegisterSchema>
export type UserRegister = z.infer<typeof userRegisterSchema>
