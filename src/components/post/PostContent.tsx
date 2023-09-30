import { PostContentProps } from "@/types/userTypes"

// todo: sanitize
export default function PostContent({ content }: PostContentProps) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="py-2.5 px-4"
        />
    )
}
