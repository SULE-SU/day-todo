import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoGenerator() {
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    function addTodo() {
        if (inputValue.trim()) {
            dispatch({
                type: "ADD_TODO",
                payload: {text: inputValue}
            });
            setInputValue("");
        }
    }

    return <div className="add-todo">
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="添加你今天需要做的事情..."
            className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">添加</button>
    </div>

}