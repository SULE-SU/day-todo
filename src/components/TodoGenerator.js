import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import {Input, Button, Space} from "antd";
import {PlusOutlined} from "@ant-design/icons";

export function TodoGenerator() {
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");
    const {createTodo} = useTodoService();

    function addTodo() {
        if (inputValue.trim()) {
            createTodo(inputValue)
                .then(todo => dispatch({type: "ADD_TODO", payload: todo}))
            setInputValue("");
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="add-todo">
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="添加你今天需要做的事情..."
                size="large"
            />
            <Button
                type="primary"
                icon={<PlusOutlined/>}
                onClick={addTodo}
                size="large"
            >
                添加
            </Button>
        </div>
    );
}