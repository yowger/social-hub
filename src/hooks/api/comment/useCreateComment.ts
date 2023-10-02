import { AxiosError } from "axios"
import axiosPublic from "@/lib/axios"
import { useMutation, useQueryClient } from "react-query"
import type { UserComment } from "@/schemas/commentSchema"
import { POST_QUERY_KEY } from "../queryKeys"

const createComment = (post: UserComment): Promise<any> => {
    return axiosPublic.post("/api/comment", post)
}

const useCreateComment = () => {
    const queryClient = useQueryClient()

    return useMutation<UserComment, AxiosError, UserComment>({
        mutationFn: createComment,
        onSuccess: (postComment) =>
            queryClient.invalidateQueries(POST_QUERY_KEY),
    })
}

export default useCreateComment
