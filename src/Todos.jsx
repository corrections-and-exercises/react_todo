import Button from './Button';
import { useState } from 'react';
import { formatTitle, removeItem, completeItem } from './utils';

function TodoList({ todos, setTodos }) {
    const finishedTodos = todos.filter((t) => t.done);
    const unfinishedTodos = todos.filter((t) => !t.done);

    return (
        <div className="flex flex-wrap justify-evenly gap-10 py-4">
            <div className="w-96 ">
                {unfinishedTodos.length > 0 && <h3>Not Done</h3>}
                {unfinishedTodos.map((todo) => {
                    return (
                        <Todo key={todo.id} todo={todo} setTodos={setTodos} />
                    );
                })}
            </div>
            <div className=" w-96">
                {finishedTodos.length > 0 && <h3>Done</h3>}
                {finishedTodos.map((todo) => {
                    return (
                        <Todo key={todo.id} todo={todo} setTodos={setTodos} />
                    );
                })}
            </div>
        </div>
    );
}

function Todo({ todo, setTodos }) {
    const [edit, setEdit] = useState(false);
    const [newInput, setNewInput] = useState(false);

    const changeTitleInput = (
        <input
            className="my-4 w-full"
            type="text"
            onChange={(e) => setNewInput(e.target.value)}
            placeholder={formatTitle(todo.title)}
        ></input>
    );

    function handleEdit() {
        setEdit(!edit);
    }

    function changeTitle() {
        if (newInput) {
            console.log(todo.id);
            setTodos((prev) =>
                prev.map((t) =>
                    t.id === todo.id ? { ...t, title: newInput } : t,
                ),
            );
        }
        setEdit(false);
    }

    function deleteTodo() {
        setTodos((list) => removeItem(list, todo));
    }

    function markAsDone() {
        setTodos((list) => completeItem(list, todo));
    }

    return (
        <div className=" w-fit rounded bg-yellow-400 p-4 text-black">
            {edit ? (
                changeTitleInput
            ) : (
                <p className="py-4">{formatTitle(todo.title)}</p>
            )}
            <div className="flex gap-1">
                {todo.done ? (
                    <Button handleClick={markAsDone} content="back" />
                ) : (
                    <Button handleClick={markAsDone} content="done" />
                )}
                {edit ? (
                    <Button handleClick={changeTitle} content={'save'} />
                ) : (
                    <Button handleClick={handleEdit} content={'edit'} />
                )}
                <Button handleClick={deleteTodo} content="delete" />
            </div>
        </div>
    );
}

export default TodoList;
