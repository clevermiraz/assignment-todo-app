/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import cancel from '../assets/images/cancel.png';
import editImg from '../assets/images/edit.png';
import plusImage from '../assets/images/plus.png';
import deletedTodo from '../redux/todos/thunk/deletedTodo';
import editedTodo from '../redux/todos/thunk/editedTodo';
import updateColor from '../redux/todos/thunk/updateColor';
import updateStatus from '../redux/todos/thunk/updateStatus';

export default function Todo({ todo }) {
    const dispatch = useDispatch();
    const { text, completed, color, id } = todo;
    const [input, setInput] = useState(text);
    const [editInput, setEditInput] = useState(false);

    const handleStatusChange = (todoId) => {
        dispatch(updateStatus(todoId, completed));
    };

    const handleDelete = (todoId) => {
        dispatch(deletedTodo(todoId));
    };

    const handleColorChange = (todoId, colorId) => {
        dispatch(updateColor(todoId, colorId));
    };

    const showInputHandler = () => {
        setEditInput(true);
    };

    const handleInputVChange = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editedTodo(id, input));
        setEditInput(false);
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                    completed && 'border-green-500 focus-within:border-green-500'
                }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>

            {/* //edit option */}
            <div className="flex-1">
                {editInput ? (
                    <form
                        className="flex items-center bg-gray-100 rounded-md"
                        onSubmit={submitHandler}
                    >
                        <input
                            className="w-full text-sm px-4 border-none outline-none bg-gray-100 text-gray-500"
                            value={input}
                            onChange={handleInputVChange}
                        />
                        <button
                            type="submit"
                            className={`appearance-none w-5 h-5 px-4 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                        />
                    </form>
                ) : (
                    <div className={`select-none flex-1 ${completed && 'line-through'}`}>
                        {text}
                    </div>
                )}
            </div>

            {editInput ? (
                ''
            ) : (
                <div className="flex-shrink-0 h-5 w-5 ml-auto cursor-pointer">
                    <button type="submit">
                        <img src={editImg} alt="" onClick={showInputHandler} />
                    </button>
                </div>
            )}

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
                    color === 'green' && 'bg-green-500'
                }`}
                onClick={() => handleColorChange(id, 'green')}
            />

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
                    color === 'yellow' && 'bg-yellow-500'
                }`}
                onClick={() => handleColorChange(id, 'yellow')}
            />

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
                    color === 'red' && 'bg-red-500'
                }`}
                onClick={() => handleColorChange(id, 'red')}
            />

            <img
                src={cancel}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={() => handleDelete(id)}
            />
        </div>
    );
}
