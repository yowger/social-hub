import { AxiosError } from "axios"
import axiosPublic from "@/lib/axios"
import { useMutation, useQueryClient } from "react-query"
import type { UserComment } from "@/schemas/commentSchema"
import { COMMENTS_QUERY_KEY } from "../queryKeys"

const createComment = (post: UserComment): Promise<any> => {
    return axiosPublic.post("/api/comment", post)
}

const useCreateComment = () => {
    const queryClient = useQueryClient()

    return useMutation<UserComment, AxiosError, UserComment>({
        mutationFn: createComment,
        onSuccess: (commentPost) =>
            queryClient.invalidateQueries(COMMENTS_QUERY_KEY),
    })
}

export default useCreateComment
