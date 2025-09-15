import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/mockApi";

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);

    function makeAsDone() {
        api.put(`/todos/${props.todo.id}`, {done: true})
            .then(() => dispatch({
                type: "TOGGLE_TODO",
                payload: {id: props.todo.id}
            }))
    }

    function deleteTodo() {
        api.delete(`/todos/${props.todo.id}`)
            .then(() => dispatch({
                type: "DELETE_TODO",
                payload: {id: props.todo.id}
            }))
    }

    function detailTodo() {
        alert(`ID: ${props.todo.id}\n内容: ${props.todo.text}\n状态: ${props.todo.done ? '已完成' : '未完成'}`);
    }

    return <div className={"todo-item"}>
        <span
            className={props.todo.done ? "todo-done" : ""}
            onClick={makeAsDone}
        >
            {props.todo.text}
        </span>
        <div className="todo-actions">
            <button className="detail-btn" onClick={detailTodo}>详情</button>
            <button className="delete-btn" onClick={deleteTodo}>X</button>
        </div>
    </div>;
}
