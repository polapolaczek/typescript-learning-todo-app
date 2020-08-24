import { useState, useCallback } from "react";
import { ITodo } from "../types";

const useTodos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = useCallback(
        (text: string, id: string) =>
            setTodos((prev) => {
                const newTodo: ITodo = { text, id, isDone: false };
                return [...prev, newTodo];
            }),
        []
    );

    const removeTodo = useCallback(
        (id: string) => {
            setTodos((prev) => todos.filter((todo) => id !== todo.id));
        },
        [todos]
    );

    const toggleDone = useCallback((id: string) => {
        const updateDone = (prevTodo: ITodo) =>
            prevTodo.id === id ? { ...prevTodo, isDone: !prevTodo.isDone } : prevTodo;
        setTodos((prev) => prev.map(updateDone));
    }, []);

    return { todos, addTodo, removeTodo, toggleDone };
};

export default useTodos;
