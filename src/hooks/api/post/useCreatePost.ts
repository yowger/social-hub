import { AxiosError } from "axios"
import axiosPublic from "@/lib/axios"
import { useMutation, useQueryClient } from "react-query"
import type { UserPost } from "@/schemas/postSchema"
import { POST_QUERY_KEY } from "../queryKeys"

const createPost = (post: UserPost): Promise<any> => {
    return axiosPublic.post("/api/post", post)
}

const useCreatePost = () => {
    const queryClient = useQueryClient()

    return useMutation<UserPost, AxiosError, UserPost>({
        mutationFn: createPost,
        onSuccess: (userPost) => queryClient.invalidateQueries(POST_QUERY_KEY),
    })
}

export default useCreatePost
