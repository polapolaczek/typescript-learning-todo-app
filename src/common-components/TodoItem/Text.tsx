import React from "react";
import { useTodoItemContext } from "./TodoItemContext";
import "./Text.css";

const Text: React.FC = () => {
    const {
        todo: { text, isDone },
    } = useTodoItemContext();

    const attributes = isDone ? { className: "done" } : {};
    return <span {...attributes}>{text}</span>;
};

export default Text;
