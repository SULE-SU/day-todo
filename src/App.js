import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./Routes/Routes";
import {useTodoService} from "./useTodoService";

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const {loadTodos} = useTodoService();

    useEffect(() => {
        loadTodos().then(todos => dispatch({type: "LOAD_TODOS", payload: todos}))
    }, [])
    return (
        <div className="app">
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes} />
            </TodoContext.Provider>
        </div>
    );
}

export default App;