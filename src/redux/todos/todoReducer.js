import {
    ADD_TODO,
    ALL_COMPLETED_TODO,
    CLEAR_COMPLETED_TODO,
    COLOR_SELECT_TODO,
    DELETE_TODO,
    EDIT_TODO,
    LOAD_TODO,
    TOGGLE_TODO
} from './actionTypes';

import initialState from './initialState';

const nextTodoId = (todos) => {
    // eslint-disable-next-line no-shadow
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                }
            ];

        case LOAD_TODO:
            return action.payload;

        case EDIT_TODO:
            return state.map((todo) => {
                if (todo.id !== action.payload.todoId) {
                    return todo;
                }

                return {
                    ...todo,
                    text: action.payload.todoText
                };
            });

        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                };
            });

        case COLOR_SELECT_TODO:
            const { todoId, color } = action.payload;
            return state.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        color
                    };
                }
                return todo;
            });

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);

        case ALL_COMPLETED_TODO:
            return state.map((todo) => ({
                ...todo,
                completed: true
            }));

        case CLEAR_COMPLETED_TODO:
            return state.filter((todo) => !todo.completed);

        default:
            return state;
    }
};

export default todoReducer;
