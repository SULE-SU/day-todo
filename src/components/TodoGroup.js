import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";
import {TodoGenerator} from "./TodoGenerator";

export function TodoGroup() {
    const {state} = useContext(TodoContext);

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
    </div>
}

