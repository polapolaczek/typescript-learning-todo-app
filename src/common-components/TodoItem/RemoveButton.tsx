import React from "react";
import Button, { IButtonProps } from "../Button";
import { useTodoItemContext } from "./TodoItemContext";

const RemoveButton = (props: IButtonProps) => {
    const {
        todo: { id },
        onRemove,
    } = useTodoItemContext();

    return <Button type="button" onClick={() => onRemove(id)} {...props} />;
};
export default RemoveButton;
