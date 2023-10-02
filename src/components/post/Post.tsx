import PostHeader from "./PostHeader"
import PostContent from "./PostContent"
import PostImage from "./PostImage"
import PostWrapper from "./PostWrapper"
import PostInteractionPanel from "./PostInteractionPanel"
import PostInfo from "./PostInfo"
import PostAction from "./PostAction"
import CommentComposer from "./CommentComposer"
import type { Post } from "@/types/postTypes"

type PostProps = Post

export default function Post({
    id,
    author,
    createdAt,
    privacy,
    content,
    // image,
    comments,
}: PostProps) {
    return (
        <PostWrapper>
            <PostHeader name={author.id} date={createdAt} privacy={privacy} />
            <PostContent content={content} />
            {/* <PostImage image={image} /> */}

            <PostInteractionPanel>
                <PostInfo />
                <PostAction />
                <CommentComposer postId={id} />

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
