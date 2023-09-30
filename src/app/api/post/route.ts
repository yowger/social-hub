import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { authOptions } from "@/config/nextAuthOptions"
import prisma from "@/lib/prismaDb"
import { userPostSchema } from "@/schemas/postSchema"
import { zodCustomError } from "@/lib/zodCustomError"
import type { NextRequest } from "next/server"
import type { UserPost } from "@/schemas/postSchema"

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        const { user } = session ?? {}

        if (!user) {
            return NextResponse.json(
                { error: "Account not found" },
                { status: 404 }
            )
        }

        const body: UserPost = await request.json()
        const parsedBody = userPostSchema.parse(body)
        const { content } = parsedBody

        const post = await prisma.post.create({
            data: { content, authorId: user.id, recipientId: user.id },
        })

        console.log("created post: ", post)

        return NextResponse.json({ post }, { status: 201 })
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

export async function GET(request: NextRequest) {
    try {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                content: true,
                privacy: true,
                createdAt: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                recipient: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        })

        return NextResponse.json({ posts }, { status: 201 })
    } catch (error) {
        console.log("Failed to fetch posts: ", error)

        return NextResponse.json(
            { message: "Failed to fetch posts" },
            { status: 500 }
        )
    }
}