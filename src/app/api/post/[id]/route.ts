import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import prisma from "@/lib/prismaDb"

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const postId = params.id

        console.log("postId: ", postId)

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
