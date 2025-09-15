import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "../components/TodoItem";

export function DoneListPage() {
    const { state } = useContext(TodoContext);
    
    const doneTodos = state.filter(todo => todo.done);

    return (
        <div className="done-list">
            <h2>已完成事项</h2>
            {doneTodos.length === 0 ? (
                <div className="empty-state">
                    <p>暂无已完成的事项</p>
                </div>
            ) : (
                doneTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))
            )}
        </div>
    );
}
