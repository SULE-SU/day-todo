import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";
import {Empty} from "antd";

export function TodoGroup() {
    const {state} = useContext(TodoContext);

    return (
        <div className="todo-group">
            <div className="todo-list">
                {state.length === 0 ? (
                    <Empty
                        description="添加你今天需要做的事情..."
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                    />
                ) : (
                    state.map((item, index) => {
                        return <TodoItem todo={item} key={item.id} index={index}/>
                    })
                )}
            </div>
        </div>
    );
}