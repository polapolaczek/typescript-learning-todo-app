import React from "react";
import Button, { ButtonProps } from "../Button";
import { useTodoItemContext } from "./TodoItemContext";

const RemoveButton = (props: ButtonProps) => {
    const {
        todo: { id },
        onRemove,
    } = useTodoItemContext();

    return <Button type="button" onClick={() => onRemove(id)} {...props} />;
};
export default RemoveButton;
