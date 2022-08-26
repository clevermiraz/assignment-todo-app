import { deleteTodo } from '../actions';

const deletedTodo = (todoId) => async (dispatch) => {
    await fetch(`http://assignment-server-lws.herokuapp.com/todos/${todoId}`, {
        method: 'DELETE'
    });

    dispatch(deleteTodo(todoId));
};

export default deletedTodo;
