"use client"

import useInfiniteGetPosts from "@/hooks/api/post/useInfiniteGetPost"

function PostFeed() {
    const {
        data: postData,
        isLoading,
        isError,
        error,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteGetPosts()

    console.log("posts:", postData)

    return <div>PostFeed</div>
}

export default PostFeed
