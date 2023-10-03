import axiosPublic from "@/lib/axios"
import type { AxiosError } from "axios"
import type { UserRegister } from "@/schemas/registerSchema"
import { USER_QUERY_KEY } from "../queryKeys"
import { useMutation } from "@tanstack/react-query"
import getQueryClient from "@/lib/getQueryClient"

const registerUser = (user: UserRegister): Promise<any> => {
    return axiosPublic.post("/api/register", user)
}

const useRegisterUser = () => {
    const queryClient = getQueryClient()

    return useMutation<UserRegister, AxiosError, UserRegister>({
        mutationFn: registerUser,
        onSuccess: (userData) =>
            queryClient.invalidateQueries({
                queryKey: [USER_QUERY_KEY],
                exact: true,
            }),
        //todo add global key variables
    })
}

export default useRegisterUser
