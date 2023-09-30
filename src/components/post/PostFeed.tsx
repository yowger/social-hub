"use client"

import InfiniteScroll from "react-infinite-scroll-component"
import useInfiniteGetPosts from "@/hooks/api/post/useInfiniteGetPost"
import Post from "./Post"
import SkeletonPostLoader from "./SkeletonPostLoader"

function PostFeed() {
    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteGetPosts()

    return (
        <div>
            {isLoading && <SkeletonPostLoader />}

            <InfiniteScroll
                dataLength={data ? data.length : 0}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<SkeletonPostLoader />}
                endMessage={hasNextPage && <p>no more post to show</p>}
            >
                {data?.pages.map((page) =>
                    page.posts.map((post: any) => {
                        return (
                            <Post
                                key={post.id}
                                name={post.author.name}
                                date={post.createdAt}
                                privacy={post.privacy}
                                content={post.content}
                            />
                        )
                    })
                )}
            </InfiniteScroll>
        </div>
    )
    {
    }
}

export default PostFeed
