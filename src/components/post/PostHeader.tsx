import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"
import getTimeAgo from "@/lib/getTimeAgo"
import renderPrivacyIcon from "@/lib/renderPrivacyIcons"
import type { PostHeaderProps } from "@/types/user"

export default function PostHeader({
    name,
    date,
    privacy = "public",
}: PostHeaderProps) {
    const timeAgo = getTimeAgo(date)
    const privacyIcon = renderPrivacyIcon(privacy)

    return (
        <div className="flex justify-between pt-3 px-3">
            <div className="flex space-x-2">
                <div className="flex items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <div className="flex text-sm items-center gap-1.5">
                        <p>{timeAgo}</p>
                        <p>·</p>
                        <p>{privacyIcon}</p>
                    </div>
                </div>
            </div>

            <div>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
                    <span className="sr-only">Notifications</span>
                </Button>
            </div>
        </div>
    )
}