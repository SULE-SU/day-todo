import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError} from "react-router";

function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
}

function ErrorPage() {
    const error = useRouteError();
    return <div>
        { error.status === 404
            ? <h1>404 not found</h1>
            : <div>{JSON.stringify(error)}</div>
        }
    </div>
}

const routes= createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <TodoList />,
            }
        ]
    }
]);

export const initState = [
    {id: 1, text: "这是我需要做的第一件事", done: false},
    {id: 2, text: "这是第二件我需要做的事情", done: false},
    {id: 3, text: "我已经完成了这个任务", done: true},
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div className="app">
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes} />
            </TodoContext.Provider>
        </div>
    );
}

export default App;