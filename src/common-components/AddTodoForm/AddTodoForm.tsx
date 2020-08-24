import React from "react";
import { AddTodoContext } from "./AddTodoFormContext";
import useAddTodo from "./useAddTodo";
import Input from "./Input";
import AddButton from "./AddButton";

type AddTodoFormProps = {
    children: React.ReactNode;
    onAdd: (todo: string, id: string) => void;
};

const AddTodoForm = ({ children, onAdd }: AddTodoFormProps) => {
    const { todoInput, handleTodoChange, handleTodoSubmit } = useAddTodo(onAdd);

    return (
        <AddTodoContext.Provider
            value={{
                todoInput,
                handleTodoChange,
            }}
        >
            <form onSubmit={handleTodoSubmit}>{children}</form>
        </AddTodoContext.Provider>
    );
};

export default AddTodoForm;

export { Input, AddButton };
