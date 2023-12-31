import { POST_QUERY_KEY } from "../../../constants/queryKeys"
import axiosPublic from "@/lib/axios"
import { useInfiniteQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import type { ApiPost } from "@/types/postTypes"

const getPosts = async (page = 0, pageSize = 10): Promise<ApiPost> => {
    const response: AxiosResponse<ApiPost> = await axiosPublic.get(
        `api/post?pageNumber=${page}&pageSize=${pageSize}`
    )

    return response.data
}

const useInfiniteGetPosts = (pageSize = 10) => {
    return useInfiniteQuery({
        queryKey: [POST_QUERY_KEY],
        queryFn: ({ pageParam: page = 0 }) => getPosts(page, pageSize),
        getNextPageParam: (lastPage, allPages) => {
            const totalPages = Math.ceil(lastPage.totalCount / pageSize)
            const currentPageCount = allPages.length
            const hasNextPage = totalPages > currentPageCount

            return hasNextPage ? currentPageCount : undefined
        },
    })
}

export default useInfiniteGetPosts
