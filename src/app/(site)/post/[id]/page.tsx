import SinglePost from "@/components/post/SinglePost"
import HydrateClient from "@/components/tanstack/HydrateClient"
import { POST_QUERY_KEY } from "@/hooks/api/queryKeys"
import getQueryClient from "@/lib/getQueryClient"
import prisma from "@/lib/prismaDb"
import { dehydrate } from "@tanstack/react-query"

const getPost = async (id: string) => {
    return await prisma.post.findUnique({
        where: {
            id,
        },
    })
}
export default async function Post({ params }: { params: { id: string } }) {
    const postId = params.id

    const queryClient = getQueryClient()
    await queryClient.prefetchQuery([POST_QUERY_KEY, postId], () =>
        getPost(postId)
    )
    const dehydratedState = dehydrate(queryClient)

    console.log("post: ", dehydratedState)
    return (
        <HydrateClient state={dehydratedState}>
            <SinglePost id={postId} />
        </HydrateClient>
    )
}
