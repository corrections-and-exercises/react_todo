import TodoList from './Todos';
import Layout from './Layout';
import Form from './Form';
import { useEffect, useState } from 'react';

function App() {
    const [todos, setTodos] = useState(getLocalStorageItems() || []);

    function getLocalStorageItems() {
        return JSON.parse(localStorage.getItem('todos'));
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <>
            <Layout count={todos.filter((todo) => !todo.done).length}>
                <Form setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
            </Layout>
        </>
    );
}

export default App;
