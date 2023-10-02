import { Privacy } from "./commonTypes"
export type Reactions = "like" | "love" | "laugh" | "angry" | "sad"

export type Name = string
export type Content = string

export type PostHeaderProps = {
    name: Name
    date: Date
    privacy: Privacy
}

export type PostContentProps = {
    content: Content
}

export type PostImageProps = {
    image?: string
}

export type PostCommentProps = {
    name: Name
    date: Date
    content: Content
    reactions: Reactions
}

export type PostProps = { postId: string } & PostHeaderProps &
    PostContentProps &
    PostImageProps & { comment?: PostCommentProps }
