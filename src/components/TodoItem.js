import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import {useNavigate} from "react-router";
import {Button, Space, Typography, Modal, Input} from "antd";
import {DeleteOutlined, EyeOutlined, EditOutlined} from "@ant-design/icons";

const { Text } = Typography;

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);
    const {updateTodo, updateTodoText, maveTodo} = useTodoService();
    const navigate = useNavigate();
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [editText, setEditText] = useState(props.todo.text);

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

    function showEditModal() {
        setEditText(props.todo.text);
        setIsEditModalVisible(true);
    }

    function handleEditOk() {
        if (editText.trim()) {
            const editProps = {
                todo: {
                    ...props.todo,
                    text: editText.trim()
                }
            };

            updateTodoText(editProps)
                .then((todo) => dispatch({
                    type: "UPDATE_TODO",
                    payload: todo
                }));
        }
        setIsEditModalVisible(false);
    }

    function handleEditCancel() {
        setEditText(props.todo.text);
        setIsEditModalVisible(false);
    }

    return (
        <>
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
                        icon={<EditOutlined />}
                        onClick={showEditModal}
                        size="small"
                        disabled={props.todo.done}
                    >
                        编辑
                    </Button>
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

            <Modal
                title="编辑待办事项"
                open={isEditModalVisible}
                onOk={handleEditOk}
                onCancel={handleEditCancel}
                okText="确定"
                cancelText="取消"
            >
                <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder="请输入待办事项内容..."
                    onPressEnter={handleEditOk}
                />
            </Modal>
        </>
    );
}