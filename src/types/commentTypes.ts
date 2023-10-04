import { author } from "./postTypes"

export type Comment = {
    id: string
    content: string
    createdAt: string
    updatedAt: string
    author: author
}

export type ApiComment = {
    comments: Comment[]
    pageNumber: number
    pageSize: number
    totalCount: number
}
