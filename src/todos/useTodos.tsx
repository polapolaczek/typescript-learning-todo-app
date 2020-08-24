import { useState, useCallback, useMemo } from "react";
import { ITodo } from "../types";
import getElementById from "../utils/getElementById";
import removeUndefinedFromArray from "../utils/removeUndefinedFromArray";


const getCompletedTodos = (todos: ITodo[], completedIds: string[]) => {
    const completedTodos = completedIds.map(getElementById<ITodo>(todos));
    return removeUndefinedFromArray(completedTodos);
};

const useTodos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [completedTodosIds, setCompletedTodosIds] = useState<string[]>([]);

    const activeTodos = useMemo(() => todos.filter((todo) => !todo.isDone), [todos]);
    const completedTodos = useMemo(() => getCompletedTodos(todos, completedTodosIds), [todos, completedTodosIds]);

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
            prevTodo.id === id
                ? { ...prevTodo, isDone: !prevTodo.isDone }
                : prevTodo;
        setTodos((prev) => prev.map(updateDone));
        setCompletedTodosIds((prev) =>
            prev.includes(id)
                ? prev.filter((completedId) => id !== completedId)
                : [...prev, id]
        );
    }, []);

    return { todos, activeTodos, completedTodos, completedTodosIds, addTodo, removeTodo, toggleDone };
};

export default useTodos;
