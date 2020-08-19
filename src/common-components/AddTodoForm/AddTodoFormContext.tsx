import React, { createContext } from "react";

export interface IAddTodoContext {
    todoInput: string;
    handleTodoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddTodoContext = createContext<Partial<IAddTodoContext>>({});

export const useAddTodoContext = () => {
    const context = React.useContext(AddTodoContext);
    if (!context) {
        throw new Error("AddTodoContext used outside of its Provider");
    }
    return context;
};
