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

export const addTodo = (todoText) => ({
    type: ADD_TODO,
    payload: todoText
});

export const editTodo = (todoId, todoText) => ({
    type: EDIT_TODO,
    payload: {
        todoId,
        todoText
    }
});

export const loadTodo = (todos) => ({
    type: LOAD_TODO,
    payload: todos
});

export const toggleTodo = (todoId) => ({
    type: TOGGLE_TODO,
    payload: todoId
});

export const colorSelectTodo = (todoId, color) => ({
    type: COLOR_SELECT_TODO,
    payload: {
        todoId,
        color
    }
});

export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
});

export const allCompletedTodo = () => ({
    type: ALL_COMPLETED_TODO
});

export const clearCompletedTodo = () => ({
    type: CLEAR_COMPLETED_TODO
});
