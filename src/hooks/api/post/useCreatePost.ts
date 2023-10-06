import { AxiosError } from "axios"
import axiosPublic from "@/lib/axios"
import type { UserPost } from "@/schemas/postSchema"
import { POST_QUERY_KEY } from "../../../constants/queryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const createPost = (post: UserPost): Promise<any> => {
    return axiosPublic.post("/api/post", post)
}

const useCreatePost = () => {
    const queryClient = useQueryClient()

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
