import { useState, useCallback } from "react";
import { ITodo } from "../types";

const useTodos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = useCallback(
        (text: string, id: string) =>
            setTodos((prev) => {
                const newTodo: ITodo = { text, id };
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

    return { todos, addTodo, removeTodo };
};

export default useTodos;
