import axiosPublic from "@/lib/axios"
import { POST_QUERY_KEY } from "../../../constants/queryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { AxiosError, AxiosResponse } from "axios"

export const deletePostById = async (id: string) => {
    const response = await axiosPublic.delete(`/api/post/${id}`)

    return response.data
}

const useDeletePostById = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => deletePostById(id),
        onSuccess: (postData, variables) => {
            queryClient.invalidateQueries([POST_QUERY_KEY])
        },
    })
}

export default useDeletePostById
