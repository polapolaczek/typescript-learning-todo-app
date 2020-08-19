import { useState, useCallback } from "react";
import { uniqueId } from "lodash";

const useAddTodo = (onAdd: (text: string, id: string) => void) => {
    const [todoInput, setTodoInput] = useState<string>("");

    const handleTodoChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setTodoInput(e.target.value),
        []
    );

    const handleTodoSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setTodoInput("");
            onAdd(todoInput, uniqueId());
        },
        [todoInput, onAdd]
    );

    return { todoInput, handleTodoChange, handleTodoSubmit };
};

export default useAddTodo;
