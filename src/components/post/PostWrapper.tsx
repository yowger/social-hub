import React from "react"

export default function PostWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative mb-4 bg-white dark:bg-gray-900 rounded-md">
            {children}
        </div>
    )
}
