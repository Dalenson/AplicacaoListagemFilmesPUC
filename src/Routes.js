import { MovieDetail } from "./view/MovieDetail/MovieDetail";
import { Movies } from "./view/Movies/Movies";
import { RootLayout } from "./view/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./view/Home"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movies",
                element: <Movies />
            },
            {
                path: "/movie/:id",
                element: <MovieDetail />
            }
        ]
    }
])