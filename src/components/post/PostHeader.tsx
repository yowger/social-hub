import Link from "next/link"
import { Eye, MoreHorizontal, Trash } from "lucide-react"
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
import useDeletePostById from "@/hooks/api/post/useDeletePost"

export type PostHeaderProps = {
    id: string
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
    const { mutate, isLoading, isSuccess, error } = useDeletePostById()

    const onPostDelete = async (id: string) => {
        const res = mutate(id)
        console.log("response", res)
    }

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
                        <>
                            <div className="flex">
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="justify-start"
                                >
                                    <Link
                                        href={`/post/${id}`}
                                        className="w-full flex gap-2"
                                    >
                                        <Eye size={18} />{" "}
                                        <span className="text-sm block">
                                            View
                                        </span>
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex">
                                <Button
                                    onClick={() => onPostDelete(id)}
                                    variant="ghost"
                                    size="sm"
                                    className="justify-start"
                                >
                                    <div className="w-full flex gap-2">
                                        <Trash size={18} />{" "}
                                        <span className="text-sm">Delete</span>
                                    </div>
                                </Button>
                            </div>
                        </>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
