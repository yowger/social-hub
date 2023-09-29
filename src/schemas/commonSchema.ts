import { z } from "zod"

export const nameSchema = z
    .string()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters")
export const emailSchema = z
    .string()
    .min(1, "Email is required")
    .email("Invalid email")
export const passwordSchema = z.string().min(1, "Password is required")

export const PrivacySchema = z.enum(["PUBLIC", "FOLLOWERS", "PRIVATE"])
