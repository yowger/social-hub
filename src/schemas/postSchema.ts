import { z } from "zod"
import { PrivacySchema } from "./commonSchema"

export const userPostSchema = z.object({
    content: z.string(),
    image: z.string().optional(),
    privacy: PrivacySchema.optional(),
    recipientId: z.string().optional(),
})

export type UserPost = z.infer<typeof userPostSchema>
