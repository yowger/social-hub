"use client"

import InfiniteScroll from "react-infinite-scroll-component"
import useInfiniteGetPosts from "@/hooks/api/post/useInfiniteGetPost"
import Post from "./Post"
import SkeletonPost from "./SkeletonPost"

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

    console.log("posts:", data)
    // const

    return (
        <div>
            {isLoading && (
                <div className="space-y-4 mb-4">
                    <SkeletonPost />
                    <SkeletonPost />
                    <SkeletonPost />
                    <SkeletonPost />
                    <SkeletonPost />
                </div>
            )}

            <InfiniteScroll
                dataLength={data ? data.length : 0}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<SkeletonPost />}
                endMessage={hasNextPage && <p>no more post to show</p>}
            >
                {data?.pages.map((page) =>
                    page.posts.map((post: any) => {
                        console.log("post: ", post)
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
