import { moviesApis } from "../config/Http";

export function getPopularMovies() {
    return moviesApis.get("/popular");
}

export function getMovie(movieId) {
    return moviesApis.get(`/${movieId}`);
}