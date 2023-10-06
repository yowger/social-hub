import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import prisma from "@/lib/prismaDb"
import { authOptions } from "@/config/nextAuthOptions"

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const postId = params.id

        const post = await prisma.post.findUnique({
            where: {
                id: postId,
            },
            select: {
                id: true,
                content: true,
                privacy: true,
                createdAt: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                    },
                },
                recipient: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                    },
                },
            },
        })

        return NextResponse.json({ post }, { status: 200 })
    } catch (error) {
        console.log("Failed to fetch post: ", error)

        return NextResponse.json(
            { message: "Failed to fetch post" },
            { status: 500 }
        )
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions)
        const { user } = session ?? {}

        if (!user) {
            return NextResponse.json(
                { error: "Account not found" },
                { status: 404 }
            )
        }

        console.log("params: ", params.id)

        const deletedPost = await prisma.post.delete({
            where: {
                id: params.id,
            },
        })

        console.log("deletedPost: ", deletedPost)

        return NextResponse.json({ message: "Post deleted successfully" })
    } catch (error) {
        console.log("Failed to delete posts: ", error)

        return NextResponse.json(
            { message: "Failed to delete posts" },
            { status: 500 }
        )
    }
}
