import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";

export function TodoList() {
    return <div className="todo-list-container">
        <h1>TodoList</h1>
        <TodoGroup />
        <TodoGenerator />
    </div>
}