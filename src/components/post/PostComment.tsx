import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import { CornerDownRight, MoreHorizontal } from "lucide-react"
import getTimeAgo from "@/lib/getTimeAgo"
import type { Comment } from "@/types/postTypes"
import { useState } from "react"
import CommentComposer from "./CommentComposer"

export default function PostComment({
    id,
    commentId,
    content,
    image,
    author,
    createdAt,
    updatedAt,
    subCommentCount,
    showReplyAction = true,
}: // reactions
Comment) {
    const [showReplyForm, setShowReplyForm] = useState(false)
    const timeAgo = getTimeAgo(createdAt)

    const handleReplyClick = () => {
        setShowReplyForm(!showReplyForm)
    }

    const onCommentSuccess = () => {
        setShowReplyForm(false)
    }

    const renderSubCommentAction = () => {
        if (!subCommentCount) return

        if (subCommentCount > 0) {
            const renderText = () => {
                if (subCommentCount > 1) {
                    return `View all ${subCommentCount} replies`
                } else if (subCommentCount === 1) {
                    return "View 1 reply"
                }
            }

            return (
                <div>
                    <span className="flex gap-1 text-sm  text-muted-foreground font-medium mb-1 ml-3">
                        <CornerDownRight size={14} className="mt-0.5" />
                        {renderText()}
                    </span>
                </div>
            )
        }
    }

    return (
        <div className="w-full">
            <div className="flex space-x-2 group">
                <div className="">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className="space-y-1 w-full">
                    <div className="flex gap-1">
                        <div className="flex flex-col gap-0.5 bg-secondary rounded-lg px-2.5 py-2">
                            <h3 className="font-medium text-sm">
                                {author.name}
                            </h3>
                            <p className="text-sm">{content}</p>
                        </div>

                        <div className="invisible flex items-center group-hover:visible">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                            >
                                <MoreHorizontal className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
                                <span className="sr-only">Notifications</span>
                            </Button>
                        </div>
                    </div>

                    <div className="space-x-4 text-xs text-muted-foreground">
                        <span>{timeAgo}</span>
                        {showReplyAction && (
                            <span
                                onClick={handleReplyClick}
                                className="font-bold cursor-pointer hover:underline"
                            >
                                Reply
                            </span>
                        )}
                    </div>

                    {showReplyForm ? (
                        <CommentComposer
                            postId={id}
                            parentCommentId={commentId}
                            onCommentSuccess={onCommentSuccess}
                        />
                    ) : (
                        renderSubCommentAction()
                    )}
                </div>
            </div>
        </div>
    )
}
