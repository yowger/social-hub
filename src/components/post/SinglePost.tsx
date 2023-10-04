"use client"

import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import clsx from "clsx"
import PostWrapper from "./PostWrapper"
import PostHeader from "./PostHeader"
import PostContent from "./PostContent"
import PostAction from "./PostAction"
import CommentComposer from "./CommentComposer"
import PostComment from "./PostComment"
import useGetPostById from "@/hooks/api/post/useGetPostById"
import useGetCommentsByPostId from "@/hooks/api/comment/useGetCommentsByPostId"
import { COMMENTS_QUERY_KEY } from "@/hooks/api/queryKeys"
import PostInfo from "./PostInfo"

// todo refactor
export default function SinglePost({ id }: { id: string }) {
    const queryClient = useQueryClient()
    const { data: postData } = useGetPostById(id)
    const { post } = postData ?? {}

    const {
        data: commentData,
        hasNextPage,
        fetchNextPage,
    } = useGetCommentsByPostId(id, 8)

    const comments =
        commentData?.pages?.flatMap(({ comments }) => {
            return comments
        }) || []

    const commentCount = commentData?.pages[0].totalCount

    const [isCommentComposerVisible, setIsCommentComposerVisible] =
        useState(false)

    const onClickComment = () => {
        setIsCommentComposerVisible((prev) => !prev)
    }

    const onCommentSuccess = () => {
        queryClient.invalidateQueries({ queryKey: [COMMENTS_QUERY_KEY, id] })
    }

    const onNextComments = () => {
        fetchNextPage()
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
                        <PostInfo commentCount={commentCount} />
                        <PostAction onComment={onClickComment} />
                        {isCommentComposerVisible && (
                            <CommentComposer
                                onCommentSuccess={onCommentSuccess}
                                postId={id}
                            />
                        )}

                        {comments && comments.length > 0 && (
                            <div
                                className={clsx(
                                    comments.length >= 1 ? "pb-3" : "",
                                    "space-y-2.5 mt-2"
                                )}
                            >
                                {comments.map((comment) => {
                                    return (
                                        <PostComment
                                            key={comment.id}
                                            id={comment.id}
                                            content={comment.content}
                                            // image={comment.image}
                                            author={comment.author}
                                            createdAt={comment.createdAt}
                                            updatedAt={comment.updatedAt}
                                            // reactions={comment.reactions}
                                        />
                                    )
                                })}
                            </div>
                        )}

                        {hasNextPage && (
                            <span
                                onClick={onNextComments}
                                className="text-sm cursor-pointer duration-100 inline-block h-full py-1 mb-1 font-medium text-muted-foreground hover:underline hover:text-primary"
                            >
                                View more comments
                            </span>
                        )}
                    </div>
                </PostWrapper>
            ) : (
                <p>post not found</p>
            )}
        </div>
    )
}
