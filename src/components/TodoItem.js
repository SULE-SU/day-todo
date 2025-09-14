

import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoItem(props) {
    const {state, dispatch} = useContext(TodoContext);

    function makeAsDone() {
        dispatch({
            type: "TOGGLE_TODO",
            payload: {id: props.todo.id}
        })
    }

    function deleteTodo() {
        dispatch({
            type: "DELETE_TODO",
            payload: {id: props.todo.id}
        })
    }

    return <div className={"todo-item"}>
        <span
            className={props.todo.done ? "todo-done" : ""}
            onClick={makeAsDone}
        >
            {props.todo.text}
        </span>
        <button className="delete-btn" onClick={deleteTodo}>X</button>
    </div>;
}


export function todoReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_TODO":
            const newState = [...state];
            const id = action.payload.id;
            return newState.map((value) => {
                if (value.id === id) {
                    return {
                        id,
                        text: value.text,
                        done: !value.done
                    };
                }
                return value
            })
        case "ADD_TODO":
            const newId = state.length > 0 ? Math.max(...state.map(todo => todo.id)) + 1 : 1;
            return [...state, {
                id: newId,
                text: action.payload.text,
                done: false
            }];
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}
