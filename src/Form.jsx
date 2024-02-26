import { useState } from 'react';
import { addItem } from './utils';

function Form({ setTodos }) {
    const initialState = {
        title: '',
    };
    const [formState, setFormState] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault();
        if (formState.title) {
            setTodos((list) => addItem(list, formState));
        }
        setFormState(initialState);
    }

    function handleInput(e) {
        setFormState({
            // ...formState,
            title: e.target.value,
            id: crypto.randomUUID(),
            done: false,
        });
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto flex  w-52 flex-col bg-slate-700 p-4"
        >
            <label className="py-1" htmlFor="title">
                Title
            </label>
            <input
                className="text-black"
                value={formState.title}
                onChange={handleInput}
                type="text"
                id="title"
                name="title"
            />
            <button
                className=" my-2 rounded border-2 border-white bg-slate-800 p-2 uppercase text-orange-400 hover:text-green-600 active:text-green-900 "
                type="submit"
            >
                Add Todo
            </button>
        </form>
    );
}

export default Form;
