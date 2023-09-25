import Image from "next/image"
import PostHeader from "./PostHeader"
import PostContent from "./PostContent"
import type { PostProps } from "@/types/user"
import PostAction from "./PostAction"
import PostInfo from "./PostInfo"
import PostImage from "./PostImage"
import PostComment from "./PostComment"

export default function Post({
    name,
    date,
    privacy,
    content,
    image,
    comment,
}: PostProps) {
    return (
        <div className="relative mb-10 bg-white dark:bg-gray-900 rounded-md">
            <PostHeader name={name} date={date} privacy={privacy} />

            <PostContent content={content} />

            <PostImage image={image} />

            {/* post info */}

            <div className="space-y-2.5 px-4">
                <PostInfo />

                <PostAction />

                {comment && (
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
                )}
            </div>

            {/* <div>view more comments</div> */}
        </div>
    )
}
