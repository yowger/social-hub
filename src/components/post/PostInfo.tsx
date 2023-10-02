import type { Count } from "@/types/postTypes"

type Props = {
    count: Count
}

export default function PostInfo({ count }: Props) {
    // count.Comments
    // count.Reaction
    return (
        <>
            {count.Comments > 0 || count.Reaction > 0 ? (
                <div className="text-sm flex items-center justify-between">
                    <div>Reactions - 2</div>

                    <div>
                        {count.Comments > 0 && count.Comments} comment
                        {count.Comments > 1 && "s"}
                    </div>
                </div>
            ) : null}
        </>
    )
}
