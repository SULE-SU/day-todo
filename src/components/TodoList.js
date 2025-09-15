import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";

export function TodoList() {
    return <div className="todo-list-container">
        <TodoGroup />
        <TodoGenerator />
    </div>
}