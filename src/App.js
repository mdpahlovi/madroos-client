import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Blogs from "./components/Blogs";
import FAQ from "./components/FAQ";
import Main from "./layouts/Main";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/courses",
                    element: <Courses />,
                },
                {
                    path: "/blogs",
                    element: <Blogs />,
                },
                {
                    path: "/faq",
                    element: <FAQ />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
