import { Forward, MessageCircle, ThumbsUp } from "lucide-react"
import { Button } from "../ui/button"

export default function PostAction() {
    return (
        <div className="grid grid-cols-3 gap-1 border-y py-1">
            <Button variant="ghost" className="flex items-center gap-2">
                <ThumbsUp /> React
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
                <MessageCircle /> Comment
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
                <Forward /> Share
            </Button>
        </div>
    )
}
