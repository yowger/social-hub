import SkeletonPost from "./SkeletonPost"

type Props = {
    length?: number
}

export default function SkeletonPostLoader({ length = 5 }: Props) {
    const skeletonPostLoader = Array.from({ length }, (_, index) => (
        <SkeletonPost key={index} />
    ))

    return <div className="space-y-4 mb-4">{skeletonPostLoader}</div>
}
