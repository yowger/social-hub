import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { PostContentProps } from "@/types/userTypes"
import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"

// todo: sanitize
export default function PostContent({ content }: PostContentProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    const onExpandContent = () => {
        setIsExpanded((prev) => !prev)
    }

    useEffect(() => {
        const contentDivHeight = contentRef.current?.offsetHeight

        console.log("content ", content, contentDivHeight)

        if (contentDivHeight && contentDivHeight > 117) {
            setIsExpanded(true)
        }
    }, [])

    return (
        <>
            <div
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: content }}
                className={clsx(
                    isExpanded
                        ? "max-h-[6.9em] overflow-hidden pt-2.5"
                        : "py-2.5",
                    "px-4"
                )}
            />
            {isExpanded && (
                <div className="flex items-center justify-center pb-1">
                    <Button
                        onClick={onExpandContent}
                        variant="ghost"
                        size="sm"
                        className="rounded-full h-10 w-10"
                    >
                        <ChevronDown className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                </div>
            )}
        </>
    )
}
