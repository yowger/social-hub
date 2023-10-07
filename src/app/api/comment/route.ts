import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { authOptions } from "@/config/nextAuthOptions"
import prisma from "@/lib/prismaDb"
import { userCommentSchema } from "@/schemas/commentSchema"
import { zodCustomError } from "@/lib/zodCustomError"
import type { NextRequest } from "next/server"
import type { UserComment } from "@/schemas/commentSchema"

export async function POST(request: NextRequest) {
    try {
        // todo make component or reusable code for session
        const session = await getServerSession(authOptions)
        const { user } = session ?? {}

        if (!user) {
            return NextResponse.json(
                { error: "Account not found" },
                { status: 404 }
            )
        }

        const body: UserComment = await request.json()
        const parsedBody = userCommentSchema.parse(body)
        const { content, image, postId, parentCommentId } = parsedBody

        const post = prisma.comments.findUnique({
            where: {
                id: postId,
            },
        })

        if (!post) {
            return NextResponse.json(
                { error: "Post not found" },
                { status: 404 }
            )
        }

        const comment = await prisma.comments.create({
            data: { content, postId, authorId: user.id, parentCommentId },
        })

        return NextResponse.json({ comment }, { status: 201 })
    } catch (error) {
        const zodErrorResponse = zodCustomError(
            error,
            "Failed to create post: invalid data"
        )
        if (zodErrorResponse) {
            return NextResponse.json(zodErrorResponse, { status: 422 })
        }

        console.log("Failed to create post: ", error)

        return NextResponse.json(
            { message: "Failed to create post" },
            { status: 500 }
        )
    }
}
