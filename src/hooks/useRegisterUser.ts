import axiosPublic from "@/lib/axios"
import { useMutation } from "react-query"
import { UserRegister } from "@/schemas/registerSchema"

const registerUser = (data: UserRegister): Promise<any> => {
    return axiosPublic.post("/api/register", data)
}

const useRegisterUser = () => {
    const { data, isLoading, isError, error } = useMutation(registerUser)

    return { data, isLoading, isError, error }
}

export default useRegisterUser
