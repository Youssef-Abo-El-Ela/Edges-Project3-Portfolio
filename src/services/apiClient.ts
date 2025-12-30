import axios from "axios"

export const quoteApiClient = axios.create({
    baseURL: "http://api.quotable.io/random",
    headers: {
        "Content-Type": "application/json",
    },
})

