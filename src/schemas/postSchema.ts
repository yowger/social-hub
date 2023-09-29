import { z } from "zod"
import { PrivacySchema } from "./commonSchema"

export const PostSchema = z.object({
    id: z.string(),
    content: z.string(),
    image: z.string().optional(),
    privacy: PrivacySchema,
    authorId: z.string(),
})

export type UserPost = z.infer<typeof PostSchema>
