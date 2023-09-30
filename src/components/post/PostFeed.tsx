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
    } = useInfiniteGetPosts(5)

    const post =
        data?.pages.flatMap(({ posts }) => {
            return posts
        }) || []

    const dataLength = post ? post.length : 0
    const endMessage = hasNextPage === false && <p>no more post to show</p>
    return (
        <div>
            {isLoading && <SkeletonPostLoader />}

            <InfiniteScroll
                dataLength={dataLength}
                next={fetchNextPage}
                hasMore={!!hasNextPage}
                loader={<SkeletonPostLoader />}
                endMessage={endMessage}
            >
                {post.map((post, index) => {
                    return (
                        <Post
                            key={index}
                            name={post.author.name}
                            date={post.createdAt}
                            privacy={post.privacy}
                            content={post.content}
                        />
                    )
                })}
            </InfiniteScroll>
        </div>
    )
    {
    }
}

export default PostFeed
