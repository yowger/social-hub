"use client"

import { POST_QUERY_KEY } from "@/hooks/api/queryKeys"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import PostWrapper from "./PostWrapper"
import PostHeader from "./PostHeader"
import PostContent from "./PostContent"

export default function SinglePost({ id }: { id: string }) {
    const { data, isLoading } = useQuery({
        queryKey: [POST_QUERY_KEY, id],
        queryFn: () => fetch(`/api/post/${id}`).then((res) => res.json()),
    })

    const queryClient = useQueryClient()

    console.log("data: ", data?.post)

    return (
        <div>
            {isLoading ? (
                <p>loading</p>
            ) : (
                data?.post && (
                    <PostWrapper>
                        <PostHeader
                            name={data.post.author.name}
                            date={data.post.createdAt}
                            privacy={data.post.privacy}
                        />
                        <PostContent content={data.post.content} />
                    </PostWrapper>
                )
            )}
        </div>
    )
}
