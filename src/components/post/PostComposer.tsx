"use client"

import { useEffect, useState } from "react"
import useCreatePost from "@/hooks/api/post/useCreatePost"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

export default function PostComposer() {
    const [postContent, setPostContent] = useState("")
    const { mutate, isLoading, isSuccess, error } = useCreatePost()

    const handlePostSubmit = () => {
        if (!postContent.trim()) {
            return
        }

        // const privacy = "PUBLIC"

        mutate({ content: postContent })
    }

    useEffect(() => {
        if (isSuccess) {
            setPostContent("")
        }
    }, [isSuccess])

    return (
        <div className="space-y-2">
            <Textarea
                placeholder="What's on your mind"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
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
                    POST
                </Button>
            </div>
            {error && <p>{error.message}</p>}
        </div>
    )
}
