// import { AxiosResponse } from "axios"
// import axiosPublic from "@/lib/axios"
// import { PostById } from "@/types/postTypes"
// import { POST_QUERY_KEY } from "../queryKeys"
// import { useQuery } from "@tanstack/react-query"

// const getPostById = async (page = 0, pageSize = 10): Promise<PostById> => {
//     const response: AxiosResponse<PostById> = await axiosPublic.get(
//         `api/post?pageNumber=${page}&pageSize=${pageSize}`
//     )
//     const { data } = response

//     return data
// }


// const useGetPostById = (pageSize = 10) => {
//     return useQuery({
//         queryKey: [POST_QUERY_KEY, ],
//         queryFn: ({ pageParam: page = 0 }) => getPosts(page, pageSize),
//         refetchOnWindowFocus: false,
//         getNextPageParam: (lastPage, allPages) => {
//             const totalPages = Math.ceil(lastPage.totalCount / pageSize)
//             const currentPageCount = allPages.length
//             const hasNextPage = totalPages > currentPageCount

//             return hasNextPage ? currentPageCount : undefined
//         },
//     })
// }


// export default useGetPostById