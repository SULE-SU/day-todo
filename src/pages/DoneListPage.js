import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";
import {Typography, Empty} from "antd";

const {Title} = Typography;

export function DoneListPage() {
    const {state} = useContext(TodoContext);

    const doneTodos = state.filter(todo => todo.done);

    return (
        <div className="done-list">
            <Title level={2}>已完成事项</Title>
            {doneTodos.length === 0 ? (
                <Empty
                    description="暂无已完成的事项"
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
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