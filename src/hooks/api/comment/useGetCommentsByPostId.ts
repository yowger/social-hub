import axiosPublic from "@/lib/axios"
import { COMMENTS_QUERY_KEY } from "../../../constants/queryKeys"
import { useInfiniteQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import { ApiComment } from "@/types/commentTypes"

export const getCommentsByPostId = async (
    postId: string,
    page = 0,
    pageSize = 10
): Promise<ApiComment> => {
    const response: AxiosResponse<ApiComment> = await axiosPublic.get(
        `/api/comment/${postId}?pageNumber=${page}&pageSize=${pageSize}`
    )

    return response.data
}

const useGetCommentsByPostId = (postId: string, pageSize = 10) => {
    return useInfiniteQuery({
        queryKey: [COMMENTS_QUERY_KEY, postId],
        queryFn: ({ pageParam: page = 0 }) =>
            getCommentsByPostId(postId, page, pageSize),
        getNextPageParam: (lastPage, allPages) => {
            const totalPages = Math.ceil(lastPage.totalCount / pageSize)
            const currentPageCount = allPages.length
            const hasNextPage = totalPages > currentPageCount

            return hasNextPage ? currentPageCount : undefined
        },
    })
}

// const useGetCommentsByPostId = (postId: string, page: number) => {
//     return useQuery({
//         queryKey: [COMMENTS_QUERY_KEY, postId, { page }],
//         queryFn: () => getCommentsByPostId(postId, page),
//         keepPreviousData: true,
//         staleTime: 5000,
//     })
// }

export default useGetCommentsByPostId
