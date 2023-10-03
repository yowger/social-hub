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
    } = useInfiniteGetPosts(10)

    const post =
        data?.pages?.flatMap(({ posts }) => {
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
                {post.map((post) => {
                    // console.log("post: ", post)
                    return (
                        <Post
                            key={post.id}
                            id={post.id}
                            author={post.author}
                            recipient={post.recipient}
                            createdAt={post.createdAt}
                            privacy={post.privacy}
                            content={post.content}
                            _count={post._count}
                            Comments={post.Comments}
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
