export type Privacy = "private" | "public" | "followers"

export type PostHeaderProps = {
    name: string
    date: Date
    privacy: Privacy
}

export type PostContentProps = {
    content: string
}

export type PostImageProps = {
    image?: string
}

export type PostProps = PostHeaderProps & PostContentProps & PostImageProps
