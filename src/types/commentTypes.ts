import { author } from "./postTypes"

export type Comment = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    author: author
}

export type ApiComment = {
    comments: Comment[]
    pageNumber: number
    pageSize: number
    totalCount: number
}
