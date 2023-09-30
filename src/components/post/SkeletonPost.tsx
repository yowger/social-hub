import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonPost() {
    return (
        <div className="p-4 bg-white dark:bg-gray-900 rounded-md">
            <div className="flex items-center space-x-2 mb-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-3 w-[200px]" />
                    <Skeleton className="h-3 w-[110px]" />
                </div>
            </div>

            <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-[200px]" />
            </div>
        </div>
    )
}
