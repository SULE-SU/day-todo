import {useContext, useState} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext);
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

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    return <div className="todo-group">
        <div className="todo-list">
            {state.length === 0 ? (
                <div className="empty-state">
                    <p>添加你今天需要做的事情...</p>
                </div>
            ) : (
                state.map((item, index) => {
                    return <TodoItem todo={item} key={item.id} index={index}/>
                })
            )}
        </div>
        <div className="add-todo">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="添加你今天需要做的事情..."
                className="todo-input"
            />
            <button onClick={addTodo} className="add-btn">添加</button>
        </div>
    </div>
}

