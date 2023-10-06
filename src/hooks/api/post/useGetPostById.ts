import axiosPublic from "@/lib/axios"
import { POST_QUERY_KEY } from "../../../constants/queryKeys"
import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import type { PostById } from "@/types/postTypes"

export const getPostById = async (id: string): Promise<PostById> => {
    const response: AxiosResponse<PostById> = await axiosPublic.get(
        `/api/post/${id}`
    )

    return response.data
}

const useGetPostById = (id: string) => {
    return useQuery({
        queryKey: [POST_QUERY_KEY, id],
        queryFn: () => getPostById(id),
    })
}

export default useGetPostById
