import axiosPublic from "@/lib/axios"
import { COMMENTS_QUERY_KEY } from "../queryKeys"
import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import { ApiComment } from "@/types/commentTypes"

export const getCommentsByPostId = async (
    postId: string
): Promise<ApiComment> => {
    const response: AxiosResponse<ApiComment> = await axiosPublic.get(
        `/api/comment/${postId}`
    )

    return response.data
}

const useGetCommentsByPostId = (postId: string) => {
    return useQuery({
        queryKey: [COMMENTS_QUERY_KEY, postId],
        queryFn: () => getCommentsByPostId(postId),
        keepPreviousData: true,
        staleTime: 5000,
    })
}

export default useGetCommentsByPostId
