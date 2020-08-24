import React from "react";
import { TodoItemContext, ITodoItem } from "./TodoItemContext";
import RemoveButton from "./RemoveButton";
import CompletionButton from "./CompletionButton";
import Text from "./Text";

type TodoItemProps = ITodoItem & {
    children: React.ReactNode;
};

const TodoItem = ({ children, todo, onRemove, onCompletion }: TodoItemProps) => {
    return (
        <TodoItemContext.Provider value={{ todo, onRemove, onCompletion }}>
            <div>{children}</div>
        </TodoItemContext.Provider>
    );
};

export default TodoItem;

export { RemoveButton, CompletionButton, Text };
