import { AxiosError } from "axios"
import axiosPublic from "@/lib/axios"
import type { UserComment } from "@/schemas/commentSchema"
import { POST_QUERY_KEY } from "../queryKeys"
import { useMutation } from "@tanstack/react-query"
import getQueryClient from "@/lib/getQueryClient"

const createComment = (post: UserComment): Promise<any> => {
    return axiosPublic.post("/api/comment", post)
}

const useCreateComment = () => {
    const queryClient = getQueryClient()

    return useMutation<UserComment, AxiosError, UserComment>({
        mutationFn: createComment,
        onSuccess: (postComment) =>
            queryClient.invalidateQueries({
                queryKey: [POST_QUERY_KEY],
                exact: true,
            }),
    })
}

export default useCreateComment
