"use client"

import { useState } from "react"
import PostWrapper from "./PostWrapper"
import PostHeader from "./PostHeader"
import PostContent from "./PostContent"
import useGetPostById from "@/hooks/api/post/useGetPostById"
import PostAction from "./PostAction"
import CommentComposer from "./CommentComposer"

export default function SinglePost({ id }: { id: string }) {
    const { data } = useGetPostById(id)
    const { post } = data ?? {}

    const [isCommentComposerVisible, setIsCommentComposerVisible] =
        useState(false)

    const onClickComment = () => {
        setIsCommentComposerVisible((prev) => !prev)
    }

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

                    <div className="px-4">
                        <PostAction onComment={onClickComment} />
                        {isCommentComposerVisible && (
                            <CommentComposer postId={id} />
                        )}
                    </div>
                </PostWrapper>
            ) : (
                <p>post not found</p>
            )}
        </div>
    )
}
