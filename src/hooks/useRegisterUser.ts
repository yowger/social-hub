import { AxiosError } from "axios"
import axiosPublic from "@/lib/axios"
import { useMutation, useQueryClient } from "react-query"
import { UserRegister } from "@/schemas/registerSchema"

const registerUser = (user: UserRegister): Promise<any> => {
    return axiosPublic.post("/api/register", user)
}

const useRegisterUser = () => {
    const queryClient = useQueryClient()

    return useMutation<UserRegister, AxiosError, UserRegister>({
        mutationFn: registerUser,
        onSuccess: (userData) => queryClient.invalidateQueries("users"),
        //todo add global key variables
    })
}

export default useRegisterUser
