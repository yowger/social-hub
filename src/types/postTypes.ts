import { Privacy } from "./commonTypes"

export type author = {
    id: string
    name: string
    image: string | null
}

export type Comment = {
    id: string
    content: string
    image?: string
    author: author
    createdAt: Date
    updatedAt: Date
    subCommentCount?: number
}

export type Count = {
    Comments: number
    Reaction: number
}

export type Post = {
    id: string
    content: string
    privacy: Privacy
    createdAt: Date
    author: author
    recipient: author
    Comments: Comment[]
    _count: Count
}

export type PostById = {
    post: Omit<Post, "_count" | "Comments">
}

export type ApiPost = {
    posts: Post[]
    pageNumber: number
    pageSize: number
    totalCount: number
}
