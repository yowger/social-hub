import { useInfiniteQuery } from "react-query"
import { POST_QUERY_KEY } from "../queryKeys"
import axiosPublic from "@/lib/axios"
import { AxiosResponse } from "axios"
import { ApiPost } from "@/types/post"

const getPosts = async (page = 0, pageSize = 10): Promise<ApiPost> => {
    const response: AxiosResponse<ApiPost> = await axiosPublic.get(
        `api/post?pageNumber=${page}&pageSize=${pageSize}`
    )
    const { data } = response

    return data
}

const useInfiniteGetPosts = (pageSize = 10) => {
    return useInfiniteQuery({
        queryKey: POST_QUERY_KEY,
        queryFn: ({ pageParam: page = 0 }) => getPosts(page, pageSize),
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, allPages) => {
            const totalPages = Math.ceil(lastPage.totalCount / pageSize)
            const currentPageCount = allPages.length
            const hasNextPage = totalPages > currentPageCount

            return hasNextPage ? currentPageCount : undefined
        },
    })
}

export default useInfiniteGetPosts
