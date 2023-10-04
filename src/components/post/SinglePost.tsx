"use client"

import PostWrapper from "./PostWrapper"
import PostHeader from "./PostHeader"
import PostContent from "./PostContent"
import useGetPostById from "@/hooks/api/post/useGetPostById"

export default function SinglePost({ id }: { id: string }) {
    const { data } = useGetPostById(id)
    const { post } = data ?? {}

    return (
        <div>
            {post ? (
                <PostWrapper>
                    <PostHeader
                        name={post.author.name}
                        date={post.createdAt}
                        privacy={post.privacy}
                    />
                    <PostContent content={post.content} expandContent={true} />
                </PostWrapper>
            ) : (
                <p>post not found</p>
            )}
        </div>
    )
}
