import PostHeader from "./PostHeader"
import PostContent from "./PostContent"
import PostImage from "./PostImage"
import PostWrapper from "./PostWrapper"
import PostInfo from "./PostInfo"
import PostAction from "./PostAction"
import CommentComposer from "./CommentComposer"
import PostComment from "./PostComment"
import type { Post } from "@/types/postTypes"
import { useState } from "react"
import clsx from "clsx"
import Link from "next/link"

type PostProps = Post

export default function Post({
    id,
    author,
    createdAt,
    privacy,
    content,
    // image,
    Comments,
    _count,
}: PostProps) {
    const [isCommentComposerVisible, setIsCommentComposerVisible] =
        useState(false)

    const onClickComment = () => {
        setIsCommentComposerVisible((prev) => !prev)
    }

    return (
        <PostWrapper>
            <PostHeader
                id={id}
                name={author.name}
                date={createdAt}
                privacy={privacy}
            />
            <PostContent content={content} />
            {/* <PostImage image={image} /> */}

            <div className="px-4">
                <PostInfo count={_count} id={id} />
                <PostAction onComment={onClickComment} />
                {isCommentComposerVisible && <CommentComposer postId={id} />}

                {Comments.length > 0 && (
                    <div
                        className={clsx(
                            Comments.length === 1 ? "pb-2" : "",
                            "space-y-2.5 mt-2"
                        )}
                    >
                        {Comments.map((Comment) => {
                            return (
                                <PostComment
                                    key={Comment.id}
                                    id={Comment.id}
                                    content={Comment.content}
                                    image={Comment.image}
                                    author={Comment.author}
                                    createdAt={Comment.createdAt}
                                    updatedAt={Comment.updatedAt}
                                    // reactions={comment.reactions}
                                />
                            )
                        })}
                    </div>
                )}

                {_count.Comments > 1 && (
                    <div className="text-sm cursor-pointer duration-100 inline-block h-full py-1 mb-1 font-medium text-muted-foreground hover:underline hover:text-primary">
                        <Link href={`/post/${id}`}>View more comments</Link>
                    </div>
                )}
            </div>
        </PostWrapper>
    )
}
