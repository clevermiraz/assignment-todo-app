/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import doubleTick from '../assets/images/double-tick.png';
import notes from '../assets/images/notes.png';
import plusImage from '../assets/images/plus.png';
import { allCompletedTodo, clearCompletedTodo } from '../redux/todos/actions';
import addedTodo from '../redux/todos/thunk/addedTodo';

export default function Header() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addedTodo(input));
        setInput('');
    };

    const completeHandler = () => {
        dispatch(allCompletedTodo());
    };

    const clearHandler = () => {
        dispatch(clearCompletedTodo());
    };

    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={handleSubmit}
            >
                <img src={notes} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={handleInput}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                />
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
                    <img className="w-4 h-4" src={doubleTick} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={clearHandler}>
                    Clear completed
                </li>
            </ul>
        </div>
    );
}
