export type Privacy = "private" | "public" | "followers"
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

export type PostProps = PostHeaderProps &
    PostContentProps &
    PostImageProps & { comment?: PostCommentProps }
