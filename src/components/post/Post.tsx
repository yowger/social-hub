import PostHeader from "./PostHeader"
import PostContent from "./PostContent"
import PostImage from "./PostImage"
import PostWrapper from "./PostWrapper"
import PostInteractionPanel from "./PostInteractionPanel"
import PostInfo from "./PostInfo"
import PostAction from "./PostAction"
import CommentComposer from "./CommentComposer"
import PostComment from "./PostComment"
import type { Post } from "@/types/postTypes"
import { useState } from "react"

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
    const [isCommentVisible, setIsCommentVisible] = useState(false)

    const onClickComment = () => {
        console.log("hi")
        setIsCommentVisible((prev) => !prev)
    }

    return (
        <PostWrapper>
            <PostHeader name={author.name} date={createdAt} privacy={privacy} />
            <PostContent content={content} />
            {/* <PostImage image={image} /> */}

            <PostInteractionPanel>
                <PostInfo count={_count} />
                <PostAction onComment={onClickComment} />
                {isCommentVisible && <CommentComposer postId={id} />}

                {Comments && (
                    <div className="space-y-2.5 pb-2.5">
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
                    <p className="text-sm">View more comments</p>
                )}
            </PostInteractionPanel>
        </PostWrapper>
    )
}
