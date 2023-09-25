import { Button } from "../ui/button"
import { Forward, MessageCircle, ThumbsUp } from "lucide-react"
import PostHeader from "./PostHeader"
import type { PostHeaderProps } from "@/types/user"

export default function Post({ name, date, privacy }: PostHeaderProps) {
    return (
        <div className="mb-10 bg-white dark:bg-gray-900 rounded-md">
            <PostHeader name={name} date={date} privacy={privacy} />

            {/* content */}
            <div className="py-2 px-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione nam voluptatum tempore vel repellat necessitatibus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione nam voluptatum tempore vel repellat necessitatibus.{" "}
            </div>
            {/* <div> Image</div> */}

            {/* post info */}
            <div className="space-y-2 px-3">
                <div className="text-sm flex items-center justify-between">
                    <div>Reactions - 2</div>
                    <div>2 comments</div>
                </div>

                {/* actions */}
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
            </div>

            {/* if more than 2 comments */}
            {/* <div>view more comments</div> */}
        </div>
    )
}
