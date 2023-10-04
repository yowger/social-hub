import type { Count } from "@/types/postTypes"
import Link from "next/link"

type PostInfoProps = {
    id: string
    reactionCount?: number
    commentCount?: number
}

export default function PostInfo({
    id,
    reactionCount,
    commentCount,
}: PostInfoProps) {
    return (
        <>
            {(commentCount && commentCount > 0) ||
            (reactionCount && reactionCount > 0) ? (
                <div className="text-sm flex items-center justify-between pb-1.5 text-muted-foreground">
                    <div>Reactions - 2</div>

                    <div>
                        {commentCount && (
                            <Link
                                href={`/post/${id}`}
                                className="hover:underline hover:text-primary"
                            >
                                {commentCount > 0 && commentCount} comment
                                {commentCount > 1 && "s"}
                            </Link>
                        )}
                    </div>
                </div>
            ) : null}
        </>
    )
}
