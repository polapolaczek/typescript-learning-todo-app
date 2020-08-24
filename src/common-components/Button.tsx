import React from "react";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    text?: string;
};

const Button = (props: ButtonProps) => (
    <button {...props}>{props.text ? props.text : props.children}</button>
);

export default Button;
