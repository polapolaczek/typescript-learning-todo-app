import React from "react";
import { ITodos } from "../types";
import useCreateControlledContext from "../utils/useCreateControlledContext";
import useTodos from "./useTodos";

interface ITodosContext extends ITodos {}

const [useTodosContext, TodosContext] = useCreateControlledContext<
    ITodosContext
>("TodosContext");

const TodosContextProvider: React.FC = (props) => {
    const {
        todos,
        activeTodos,
        completedTodos,
        addTodo,
        removeTodo,
        toggleDone,
    } = useTodos();
    return (
        <TodosContext.Provider
            value={{
                todos,
                activeTodos,
                completedTodos,
                addTodo,
                removeTodo,
                toggleDone,
            }}
            {...props}
        />
    );
};

export { useTodosContext, TodosContextProvider };
