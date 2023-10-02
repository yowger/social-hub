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

type PostProps = Post

export default function Post({
    id,
    author,
    createdAt,
    privacy,
    content,
    // image,
    Comments,
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

                {/* <div>view more comments</div> */}
            </PostInteractionPanel>
        </PostWrapper>
    )
}
