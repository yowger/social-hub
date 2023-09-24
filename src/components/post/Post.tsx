import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import { MoreHorizontal } from "lucide-react"

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
                        <p className="text-sm font-semibold">Roger Pantil</p>
                        <p className="text-sm">1h ago</p>
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
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione nam voluptatum tempore vel repellat necessitatibus.
            </div>
            <div> Image</div>

            <div>
                <div>Reactions - 2</div>
                <div>2 comments</div>
            </div>

            {/* actions */}
            <div>
                <div>React</div>
                <div>Comment</div>
            </div>

            {/* if more than 2 comments */}
            <div>view more comments</div>
        </div>
    )
}
