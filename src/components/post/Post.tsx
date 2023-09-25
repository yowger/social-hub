import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import {
    Forward,
    Globe,
    MessageCircle,
    MoreHorizontal,
    Share,
    ThumbsUp,
} from "lucide-react"

export default function Post() {
    return (
        <div>
            {/* header */}
            <div className="flex justify-between">
                <div className="flex space-x-2">
                    <Avatar className="w-9 h-9">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="">
                        <p className="font-semibold">Roger Pantil</p>
                        <div className="flex text-sm items-center gap-1.5">
                            <p className="">1h ago</p>
                            <p>·</p>
                            <Globe className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                <div>
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

            {/* content */}
            <div className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione nam voluptatum tempore vel repellat necessitatibus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione nam voluptatum tempore vel repellat necessitatibus.{" "}
            </div>
            {/* <div> Image</div> */}

            {/* post info */}
            <div className="space-y-2">
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
