import axios from "axios"

const configureBaseUrl = () => {
    let BASE_URL

    console.log("process.env.API_BASE_URL: ", process.env.API_BASE_URL)

    if (process.env.NODE_ENV === "development") {
        BASE_URL = "http://localhost:3000"
    } else {
        BASE_URL = process.env.API_BASE_URL
    }

    return BASE_URL
}

const axiosPublic = axios.create({
    baseURL: configureBaseUrl(),
    headers: {
        "Content-type": "application/json",
    },
})

export default axiosPublic
