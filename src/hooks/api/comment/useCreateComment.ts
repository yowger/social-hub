import { AxiosError } from "axios"
import axiosPublic from "@/lib/axios"
import type { UserComment } from "@/schemas/commentSchema"
import {
    COMMENTS_QUERY_KEY,
    POST_QUERY_KEY,
} from "../../../constants/queryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const createComment = (post: UserComment): Promise<any> => {
    return axiosPublic.post("/api/comment", post)
}

// todo refactor for both comment and post
const useCreateComment = () => {
    const queryClient = useQueryClient()

    return useMutation<UserComment, AxiosError, UserComment>({
        mutationFn: createComment,
        onSuccess: (postComment, variables) => {
            const { postId } = variables

            if (postId) {
                console.log("has post id")
                queryClient.invalidateQueries({
                    queryKey: [COMMENTS_QUERY_KEY, postId],
                })
            } else {
                queryClient.invalidateQueries({
                    queryKey: [POST_QUERY_KEY],
                })
            }
        },
    })
}

export default useCreateComment
