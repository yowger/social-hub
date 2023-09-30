import { MoreHorizontal } from "lucide-react"
import PrivacyIcon from "./PrivacyIcon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import getTimeAgo from "@/lib/getTimeAgo"
import type { PostHeaderProps } from "@/types/user"

export default function PostHeader({ name, date, privacy }: PostHeaderProps) {
    const timeAgo = getTimeAgo(date)

    return (
        <div className="flex justify-between pt-3 px-4">
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
                        <PrivacyIcon privacy={privacy} />
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
