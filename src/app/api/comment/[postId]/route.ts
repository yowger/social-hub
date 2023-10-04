import { NextResponse } from "next/server"
import prisma from "@/lib/prismaDb"
import type { NextRequest } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const postId = params.postId
        const { searchParams } = new URL(request.url)
        const pageNumber = +(searchParams.get("pageNumber") ?? 0)
        const pageSize = +(searchParams.get("pageSize") ?? 10)
        console.log("page number: ", pageNumber)

        const skip = pageNumber * pageSize

        const [totalCount, comments] = await prisma.$transaction([
            prisma.comments.count({
                where: {
                    postId,
                },
            }),
            prisma.comments.findMany({
                skip: skip,
                take: pageSize,
                where: {
                    postId,
                },
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
                },
            }),
        ])

        return NextResponse.json(
            { comments, pageNumber, pageSize, totalCount },
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
