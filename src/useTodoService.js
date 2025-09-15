import {api} from "./api/mockApi";

export function useTodoService() {

    const loadTodos = () => {
        return api.get("/todos").then(response => response.data)
    }

    const createTodo = (inputValue) => {
        return api.post("/todos", {text: inputValue, done: false})
            .then(response => response.data);
    }

    const updateTodo = (props) => {
        return api.put(`/todos/${props.todo.id}`, {text: props.todo.text, done: !props.todo.done})
            .then(response => response.data);
    }

    const updateTodoText = (editProps) => {
        return api.put(`/todos/${editProps.todo.id}`, {
            text: editProps.todo.text,
            done: editProps.todo.done
        }).then(response => response.data);
    }

    const maveTodo = (props) => {
        return api.delete(`/todos/${props.todo.id}`)
            .then(response => response.data);
    }

    return {loadTodos, createTodo, updateTodo, updateTodoText, maveTodo}
}