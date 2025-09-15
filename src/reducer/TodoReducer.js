export function todoReducer(state, action) {
    switch (action.type) {
        case "LOAD_TODOS":
            return action.payload;
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