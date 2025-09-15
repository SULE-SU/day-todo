import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";


export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);
    const {updateTodo, maveTodo} = useTodoService();

    function makeAsDone() {
        updateTodo(props)
            .then((todo) => dispatch({
                type: "UPDATE_TODO",
                payload:todo
            }))
    }

    function deleteTodo() {
        maveTodo(props)
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
