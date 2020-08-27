import React from "react";
import Button, { IButtonProps } from "../Button";
import { useTodoItemContext } from "./TodoItemContext";

const RemoveButton: React.FC<IButtonProps> = (props) => {
    const {
        todo: { id },
        onRemove,
    } = useTodoItemContext();

    return <Button type="button" onClick={() => onRemove(id)} {...props} />;
};
export default RemoveButton;
