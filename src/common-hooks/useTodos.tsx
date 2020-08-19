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

    return { todos, addTodo };
};

export default useTodos;
