import { loadTodo } from '../actions';

const fetchTodos = async (dispatch) => {
    const response = await fetch('http://assignment-server-lws.herokuapp.com/todos');
    const todos = await response.json();

    dispatch(loadTodo(todos));
};

export default fetchTodos;
