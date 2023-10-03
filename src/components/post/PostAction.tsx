import { Forward, MessageCircle, ThumbsUp } from "lucide-react"
import { Button } from "../ui/button"

type PostActionProps = {
    onReact?: () => void
    onComment?: () => void
    onShare?: () => void
}

export default function PostAction({
    onReact,
    onComment,
    onShare,
}: PostActionProps) {
    return (
        <div className="grid grid-cols-3 gap-1 border-y py-0.5 text-muted-foreground">
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={onReact}
            >
                <ThumbsUp size={18} /> React
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={onComment}
            >
                <MessageCircle size={18} /> Comment
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={onShare}
            >
                <Forward size={18} /> Share
            </Button>
        </div>
    )
}
