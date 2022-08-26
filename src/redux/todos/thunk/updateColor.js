import { colorSelectTodo } from '../actions';

const updateColor = (todoId, color) => async (dispatch) => {
    const response = await fetch(`http://assignment-server-lws.herokuapp.com/todos/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            color
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    const todo = await response.json();

    dispatch(colorSelectTodo(todo.id, color));
};

export default updateColor;
