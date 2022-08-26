import { editTodo } from '../actions';

const editedTodo = (todoId, todoText) => async (dispatch) => {
    const response = await fetch(`http://assignment-server-lws.herokuapp.com/todos/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            text: todoText
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    const todo = await response.json();

    dispatch(editTodo(todo.id, todo.text));
};

export default editedTodo;
