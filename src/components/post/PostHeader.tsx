import Link from "next/link"
import { Eye, MoreHorizontal } from "lucide-react"
import PrivacyIcon from "./PrivacyIcon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import getTimeAgo from "@/lib/getTimeAgo"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import type { Privacy } from "@/types/commonTypes"

export type PostHeaderProps = {
    id?: string
    name: string
    date: Date
    privacy: Privacy
}

export default function PostHeader({
    id,
    name,
    date,
    privacy,
}: PostHeaderProps) {
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
                    <h3 className="font-semibold leading-4">{name}</h3>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <p className="text-sm">{timeAgo}</p>
                        <p>·</p>
                        <PrivacyIcon privacy={privacy} />
                    </div>
                </div>
            </div>

            <div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full text-muted-foreground"
                        >
                            <MoreHorizontal className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-min p-2">
                        {id && (
                            <div className="flex">
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="flex gap-2 items-center"
                                >
                                    <Link href={`/post/${id}`}>
                                        <Eye size={18} />{" "}
                                        <span className="text-sm">View</span>
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
