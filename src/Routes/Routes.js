import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../Layouts/DefaultLayout";
import {ErrorPage} from "../pages/ErrorPage";
import {HomePage} from "../pages/HomePage";
import {TodoDetailPage} from "../pages/TodoDetailPage";
import {DoneListPage} from "../pages/DoneListPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage/>,
            },
            {
                path: "/dones",
                element: <DoneListPage />,
            }

        ]
    }
]);