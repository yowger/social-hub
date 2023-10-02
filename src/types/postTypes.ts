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
    createdAt: string
    updatedAt: string
}

export type Post = {
    id: string
    content: string
    privacy: Privacy
    createdAt: Date
    author: author
    recipient: author
    comments: Comment[]
}

export type ApiPost = {
    posts: Post[]
    pageNumber: number
    pageSize: number
    totalCount: number
}
