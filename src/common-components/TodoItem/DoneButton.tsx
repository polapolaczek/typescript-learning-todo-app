import React from "react";
import Button, { ButtonProps } from "../Button";
import { useTodoItemContext } from "./TodoItemContext";

const DoneButton = (props: ButtonProps) => {
    const {
        todo: { id },
        onDone,
    } = useTodoItemContext();
    return <Button type="button" onClick={() => onDone(id)} {...props} />;
};
export default DoneButton;
