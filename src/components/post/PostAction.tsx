import { Forward, MessageCircle, ThumbsUp } from "lucide-react"
import { Button } from "../ui/button"

export default function PostAction() {
    return (
        <div className="grid grid-cols-3 gap-1 border-y py-0.5">
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
            >
                <ThumbsUp size={18} /> React
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
            >
                <MessageCircle size={18} /> Comment
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
            >
                <Forward size={18} /> Share
            </Button>
        </div>
    )
}
