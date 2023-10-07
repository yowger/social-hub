import { author } from "./postTypes"

export type Comment = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    author: author
    _count?: {
        childrenComments: number
    }
}

export type ApiComment = {
    comments: Comment[]
    pageNumber: number
    pageSize: number
    totalCount: number
}
