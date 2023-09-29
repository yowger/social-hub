import { authOptions } from "@/config/nextAuthOptions"
import prisma from "@/lib/prismaDb"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions)
    // console.log("🚀 ~ file: route.ts:9 ~ POST ~ session:", session)

    // const post = await prisma.post.create({})

    return NextResponse.json({ message: "nice" }, { status: 201 })
}
