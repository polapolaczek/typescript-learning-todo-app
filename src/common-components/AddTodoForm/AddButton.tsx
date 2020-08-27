import React from "react";
import Button, { IButtonProps } from "../Button";

const AddButton: React.FC<IButtonProps> = (props) => (
    <Button type="submit" {...props} />
);

export default AddButton;
