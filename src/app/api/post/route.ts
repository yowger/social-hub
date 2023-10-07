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

// might change to raw or aggregate in the future better performance
// using this method, it takes about a 1 second with free tier mongo to fetch request

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)

        const pageNumber = +(searchParams.get("pageNumber") ?? 0)
        const pageSize = +(searchParams.get("pageSize") ?? 10)

        const skip = pageNumber * pageSize

        const [totalCount, posts] = await prisma.$transaction([
            prisma.post.count(),
            prisma.post.findMany({
                skip: skip,
                take: pageSize,
                orderBy: {
                    createdAt: "desc",
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
                    Comments: {
                        take: 1,
                        orderBy: {
                            createdAt: "desc",
                        },
                        select: {
                            id: true,
                            content: true,
                            createdAt: true,
                            updatedAt: true,
                            author: {
                                select: {
                                    id: true,
                                    name: true,
                                    image: true,
                                },
                            },
                            _count: {
                                select: {
                                    childrenComments: true,
                                },
                            },
                        },
                    },
                    _count: true,
                },
            }),
        ])

        return NextResponse.json(
            { posts, pageNumber, pageSize, totalCount },
            { status: 200 }
        )
    } catch (error) {
        console.log("Failed to fetch posts: ", error)

        return NextResponse.json(
            { message: "Failed to fetch posts" },
            { status: 500 }
        )
    }
}
