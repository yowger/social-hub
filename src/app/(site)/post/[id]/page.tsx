import getQueryClient from "@/lib/getQueryClient"
import { COMMENTS_QUERY_KEY, POST_QUERY_KEY } from "@/constants/queryKeys"
import { dehydrate } from "@tanstack/react-query"
import HydrateClient from "@/components/tanstack/HydrateClient"
import SinglePost from "@/components/post/SinglePost"
import { getPostById } from "@/hooks/api/post/useGetPostById"
import { getCommentsByPostId } from "@/hooks/api/comment/useGetCommentsByPostId"

export default async function page({ params }: { params: { id: string } }) {
    const postId = params.id
    const queryClient = getQueryClient()
    const page = 0

    await queryClient.prefetchQuery([POST_QUERY_KEY, postId], () =>
        getPostById(postId)
    )
    // await queryClient.prefetchQuery([COMMENTS_QUERY_KEY, postId], () =>
    //     getCommentsByPostId(postId, page)
    // )

    const dehydratedState = dehydrate(queryClient)

    return (
        <HydrateClient state={dehydratedState}>
            <SinglePost id={postId} />
        </HydrateClient>
    )
}

