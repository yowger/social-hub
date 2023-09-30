import { Privacy } from "./commonTypes"

export type Post = {
    id: string
    content: string
    privacy: Privacy
    createdAt: Date
    author: {
        id: string
        image: string | null
        name: string
    }
    recipient: {
        id: string
        name: string
    }
}

export type ApiPost = {
    posts: Post[]
    pageNumber: number
    pageSize: number
    totalCount: number
}
