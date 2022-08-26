/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useDispatch, useSelector } from 'react-redux';
import { colorChange, statusChange } from '../redux/filters/actions';

export default function Footer() {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    const todosRemaining = todos.filter((todo) => !todo.completed).length;

    const { status, colors } = filters;

    const numberOfTodos = (num) => {
        switch (num) {
            case 0:
                return 'No Task';

            case 1:
                return '1 Task';

            default:
                return `${num} Tasks`;
        }
    };

    const handleStatusChange = (filterStatus) => {
        dispatch(statusChange(filterStatus));
    };

    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChange(color, 'removed'));
        } else {
            dispatch(colorChange(color, 'added'));
        }
    };

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li
                    className={`cursor-pointer ${status === 'All' && 'font-bold'}`}
                    onClick={() => handleStatusChange('All')}
                >
                    All
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${status === 'Incompleted' && 'font-bold'}`}
                    onClick={() => handleStatusChange('Incompleted')}
                >
                    Incompleted
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${status === 'Completed' && 'font-bold'}`}
                    onClick={() => handleStatusChange('Completed')}
                >
                    Completed
                </li>
                <li />
                <li />
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                        colors.includes('green') && 'bg-green-500'
                    }`}
                    onClick={() => handleColorChange('green')}
                />
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                        colors.includes('red') && 'bg-red-500'
                    }`}
                    onClick={() => handleColorChange('red')}
                />
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
                        colors.includes('yellow') && 'bg-yellow-500'
                    }`}
                    onClick={() => handleColorChange('yellow')}
                />
            </ul>
        </div>
    );
}