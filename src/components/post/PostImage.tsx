import Image from "next/image"
import { PostImageProps } from "@/types/user"

export default function PostImage({ image }: PostImageProps) {
    if (image) {
        return (
            <div className="w-full h-full mb-2">
                <Image src={image} alt="post image" width={560} height={315} />
            </div>
        )
    }

    return null
}
