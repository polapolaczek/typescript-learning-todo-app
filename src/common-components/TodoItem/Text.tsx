import React from "react";
import { useTodoItemContext } from "./TodoItemContext";

const Text = () => {
    const {
        todo: { text },
    } = useTodoItemContext();

    return <span>{text}</span>;
};

export default Text;
