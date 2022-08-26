import { addTodo } from '../actions';

const addedTodo = (todoText) => async (dispatch) => {
    const response = await fetch('http://assignment-server-lws.herokuapp.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            text: todoText,
            completed: false
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    const todo = await response.json();

    dispatch(addTodo(todo.text));
};

export default addedTodo;
