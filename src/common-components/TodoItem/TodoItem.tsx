import React from "react";
import { TodoItemContext, ITodoItem } from "./TodoItemContext";
import RemoveButton from "./RemoveButton";
import DoneButton from "./DoneButton";
import Text from "./Text";

type TodoItemProps = ITodoItem & {
    children: React.ReactNode;
    onRemove: (id: string) => void;
};

const TodoItem = ({ children, todo, onRemove }: TodoItemProps) => {
    return (
        <TodoItemContext.Provider value={{ todo, onRemove }}>
            <div>{children}</div>
        </TodoItemContext.Provider>
    );
};

export default TodoItem;

export { RemoveButton, DoneButton, Text };
