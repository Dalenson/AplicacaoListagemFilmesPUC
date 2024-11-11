import axios from "axios";

export const moviesApis = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers: {
        Authorization: `Bearer TOKEN_CRIADO`
    }
})
