"use client"

import { useEffect, useState } from "react"
import useCreateComment from "@/hooks/api/comment/useCreateComment"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import { Loader2 } from "lucide-react"

type CommentProps = {
    postId: string
    parentCommentId?: string
    onCommentSuccess?: () => void
}

export default function CommentComposer({
    postId,
    parentCommentId,
    onCommentSuccess,
}: CommentProps) {
    const [commentContent, setCommentContent] = useState("")
    const { mutate, isLoading, isSuccess, error } = useCreateComment()

    const handlePostSubmit = () => {
        if (!commentContent.trim()) {
            return
        }

        mutate({ content: commentContent, postId, parentCommentId })
    }

    useEffect(() => {
        if (isSuccess) {
            setCommentContent("")

            if (onCommentSuccess) {
                onCommentSuccess()
            }
        }
    }, [isSuccess, onCommentSuccess])

    return (
        <div className="space-y-2 mt-2 pb-2">
            <Input
                placeholder="Write your comment"
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                className="bg-secondary"
            />
            <div className="flex justify-end">
                <Button
                    size="sm"
                    onClick={handlePostSubmit}
                    disabled={isLoading}
                >
                    {isLoading && (
                        <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                    )}
                    COMMENT
                </Button>
            </div>
            {error && <p>{error.message}</p>}
        </div>
    )
}
