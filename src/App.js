import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./Routes/Routes";
import {useTodoService} from "./useTodoService";
import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});


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