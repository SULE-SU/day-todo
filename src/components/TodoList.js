import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";
import {Typography} from "antd";

const { Title } = Typography;

export function TodoList() {
    return (
        <div className="todo-list-container">
            <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
                待办事项
            </Title>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
}