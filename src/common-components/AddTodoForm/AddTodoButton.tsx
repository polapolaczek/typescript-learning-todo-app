import React from "react";

type AddTodoButtonProps = {
    text?: string;
    children?: React.ReactNode;
};

const AddTodoButton = ({ text, children }: AddTodoButtonProps) => {
    return <button type="submit">{text || children}</button>;
};

export default AddTodoButton;
