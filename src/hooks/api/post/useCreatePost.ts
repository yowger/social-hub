import { AxiosError } from "axios"
import axiosPublic from "@/lib/axios"
import type { UserPost } from "@/schemas/postSchema"
import { POST_QUERY_KEY } from "../queryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import getQueryClient from "@/lib/getQueryClient"

const createPost = (post: UserPost): Promise<any> => {
    return axiosPublic.post("/api/post", post)
}

const useCreatePost = () => {
    const queryClient = getQueryClient()

    return useMutation<UserPost, AxiosError, UserPost>({
        mutationFn: createPost,
        onSuccess: (userPost) =>
            queryClient.invalidateQueries({
                queryKey: [POST_QUERY_KEY],
                exact: true,
            }),
    })
}

export default useCreatePost
