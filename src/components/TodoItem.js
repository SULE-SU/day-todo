import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import {useNavigate} from "react-router";
import {Button, Space, Typography} from "antd";
import {DeleteOutlined, EyeOutlined} from "@ant-design/icons";

const { Text } = Typography;

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);
    const {updateTodo, maveTodo} = useTodoService();
    const navigate = useNavigate();

    function makeAsDone() {
        updateTodo(props)
            .then((todo) => dispatch({
                type: "UPDATE_TODO",
                payload: todo
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
        navigate(`/todo/${props.todo.id}`)
    }

    return (
        <div className="todo-item">
            <Text
                delete={props.todo.done}
                style={{
                    cursor: 'pointer',
                    flex: 1,
                    color: props.todo.done ? '#8c8c8c' : '#262626'
                }}
                onClick={makeAsDone}
            >
                {props.todo.text}
            </Text>
            <Space>
                <Button
                    type="text"
                    icon={<EyeOutlined />}
                    onClick={detailTodo}
                    size="small"
                >
                    详情
                </Button>
                <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={deleteTodo}
                    size="small"
                />
            </Space>
        </div>
    );
}