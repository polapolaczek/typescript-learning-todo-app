import React from "react";
import useCreateControlledContext from "../../utils/useCreateControlledContext";

interface IAddTodoContext {
    todoInput: string;
    handleTodoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const [useAddTodoContext, AddTodoContext] = useCreateControlledContext<
    IAddTodoContext
>("AddTodoContext");

export { useAddTodoContext, AddTodoContext };
