import React from "react";

export interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    text?: string | string[];
}

const Button = (props: IButtonProps) => (
    <button {...props}>{props.text ? props.text : props.children}</button>
);

export default Button;
