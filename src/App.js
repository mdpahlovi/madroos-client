import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home";
import Courses from "./components/Courses";
import CourseDetials from "./components/CourseDetials";
import PrivateRoute from "./routes/PrivateRoute";
import Checkout from "./components/Checkout";
import Blogs from "./components/Blogs";
import FAQ from "./components/FAQ";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";

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
                    loader: () => fetch("https://madroos-server.vercel.app/courses"),
                    element: <Courses />,
                },
                {
                    path: "course/:id",
                    loader: ({ params }) => fetch(`https://madroos-server.vercel.app/course/${params.id}`),
                    element: <CourseDetials />,
                },
                {
                    path: "/checkout/:id",
                    loader: ({ params }) => fetch(`https://madroos-server.vercel.app/course/${params.id}`),
                    element: (
                        <PrivateRoute>
                            <Checkout />
                        </PrivateRoute>
                    ),
                },
                {
                    path: "/blogs",
                    element: <Blogs />,
                },
                {
                    path: "/faq",
                    element: <FAQ />,
                },
                {
                    path: "/signin",
                    element: <Signin />,
                },
                {
                    path: "/signup",
                    element: <Signup />,
                },
            ],
        },
        {
            path: "*",
            element: <ErrorPage />,
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
