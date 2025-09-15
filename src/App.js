import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";


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
                <h1>待办事项列表</h1>
                <TodoList />
            </TodoContext.Provider>
        </div>
    );
}

export default App;