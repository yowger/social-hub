import { z } from "zod"

export const userCommentSchema = z.object({
    content: z.string(),
    image: z.string().optional(),
    postId: z.string(),
    parentCommentId: z.string().optional()
})

export type UserComment = z.infer<typeof userCommentSchema>
