import PostHeader from "./PostHeader"
import PostContent from "./PostContent"
import type { PostProps } from "@/types/userTypes"
import PostImage from "./PostImage"
import PostWrapper from "./PostWrapper"
import PostInteractionPanel from "./PostInteractionPanel"
import PostInfo from "./PostInfo"
import PostAction from "./PostAction"
import CommentComposer from "./CommentComposer"

export default function Post({
    postId,
    name,
    date,
    privacy,
    content,
    image,
    comment,
}: PostProps) {
    return (
        <PostWrapper>
            <PostHeader name={name} date={date} privacy={privacy} />
            <PostContent content={content} />
            <PostImage image={image} />

            <PostInteractionPanel>
                <PostInfo />
                <PostAction />
                <CommentComposer postId={postId} />

                {/* {comment && (
                                    <div className="space-y-2.5 pb-2.5">
                                        <PostComment
                                            name={comment.name}
                                            content={comment.content}
                                            date={comment.date}
                                            reactions={comment.reactions}
                                        />
                                        <PostComment
                                            name={comment.name}
                                            content={comment.content}
                                            date={comment.date}
                                            reactions={comment.reactions}
                                        />
                                    </div>
                                )} */}

                {/* <div>view more comments</div> */}
            </PostInteractionPanel>
        </PostWrapper>
    )
}
