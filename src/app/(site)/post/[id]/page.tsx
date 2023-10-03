import getQueryClient from "@/lib/getQueryClient"
import prisma from "@/lib/prismaDb"

export default async function Post({ params }: { params: { id: string } }) {
    const queryClient = getQueryClient()
    const postId = params.id

    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
    })

    console.log("post: ", post)
    return <div>post page</div>
}
