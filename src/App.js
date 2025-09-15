import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./Routes/Routes";
import {api} from "./api/mockApi";

const loadTodos = () => {
    return api.get("/todos").then(response => response.data)
}

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        loadTodos()
            .then(todos => dispatch({type: "LOAD_TODOS", payload: todos}))
    }, [dispatch])
    return (
        <div className="app">
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes} />
            </TodoContext.Provider>
        </div>
    );
}

export default App;