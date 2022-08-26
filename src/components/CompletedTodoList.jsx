import { useSelector } from 'react-redux';
import CompletedTodo from './CompletedTodo';

export default function CompletedTodoList() {
    const todos = useSelector((state) => state.todos);

    const completedTodo = todos.filter((todo) => todo.completed === true).map((todo) => todo);

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {completedTodo.map((todo) => (
                <CompletedTodo todo={todo} key={todo.id} />
            ))}
        </div>
    );
}
