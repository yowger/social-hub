import { Privacy } from "./commonTypes"
export type Reactions = "like" | "love" | "laugh" | "angry" | "sad"

export type Name = string
export type Content = string



export type PostContentProps = {
    content: Content
}

export type PostImageProps = {
    image?: string
}
