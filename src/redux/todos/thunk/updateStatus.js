import { toggleTodo } from '../actions';

const updateStatus = (todoId, currentStatus) => async (dispatch) => {
    const response = await fetch(`http://assignment-server-lws.herokuapp.com/todos/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            completed: !currentStatus
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    const todo = await response.json();

    dispatch(toggleTodo(todo.id));
};

export default updateStatus;
