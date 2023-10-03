import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import { MoreHorizontal } from "lucide-react"
import getTimeAgo from "@/lib/getTimeAgo"
import type { Comment } from "@/types/postTypes"

export default function PostComment({
    id,
    content,
    image,
    author,
    createdAt,
    updatedAt,
}: // reactions
Comment) {
    const timeAgo = getTimeAgo(createdAt)

    return (
        <div className="">
            <div className="flex space-x-2 group">
                <div className="">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className="space-y-1">
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

                    <div className="text-xs text-muted-foreground">
                        {timeAgo}
                    </div>
                </div>
            </div>
        </div>
    )
}
