import axios from "axios";

export const moviesApis = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTYxZjI1MjcwODJkNWJmODkxOTRkYjUzNDJlOTIzZCIsIm5iZiI6MTczMTE5NjA5NS43MTQ1OTQsInN1YiI6IjY3MmZmNDMxNTkwMzZkMmJjZjA5MDE5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S0XKto1SHwvQzfPJbst1aw2CfijXshQdgNq4PMQ0Buo`
    }
})