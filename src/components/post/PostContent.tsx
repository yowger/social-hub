import { PostContentProps } from "@/types/user"

// todo: sanitize
export default function PostContent({ content }: PostContentProps) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="py-2 px-3"
        />
    )
}
