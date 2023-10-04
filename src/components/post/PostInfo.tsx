import type { Count } from "@/types/postTypes"
import Link from "next/link"

type PostInfoProps = {
    id: string
    count: Count
}

export default function PostInfo({ id, count }: PostInfoProps) {
    // count.Comments
    // count.Reaction
    return (
        <>
            {count.Comments > 0 || count.Reaction > 0 ? (
                <div className="text-sm flex items-center justify-between pb-1.5 text-muted-foreground">
                    <div>Reactions - 2</div>

                    <div>
                        <Link
                            href={`/post/${id}`}
                            className="hover:underline hover:text-primary"
                        >
                            {count.Comments > 0 && count.Comments} comment
                            {count.Comments > 1 && "s"}
                        </Link>
                    </div>
                </div>
            ) : null}
        </>
    )
}
