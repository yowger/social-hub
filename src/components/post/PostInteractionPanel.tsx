import React from "react"

export default function PostInteractionPanel({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="space-y-2.5 px-4">{children}</div>
}
