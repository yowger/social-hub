import axiosPublic from "@/lib/axios"
import { useMutation, useQueryClient } from "react-query"
import type { AxiosError } from "axios"
import type { UserRegister } from "@/schemas/registerSchema"
import { USER_QUERY_KEY } from "../queryKeys"

const registerUser = (user: UserRegister): Promise<any> => {
    return axiosPublic.post("/api/register", user)
}

const useRegisterUser = () => {
    const queryClient = useQueryClient()

    return useMutation<UserRegister, AxiosError, UserRegister>({
        mutationFn: registerUser,
        onSuccess: (userData) => queryClient.invalidateQueries(USER_QUERY_KEY),
        //todo add global key variables
    })
}

export default useRegisterUser
