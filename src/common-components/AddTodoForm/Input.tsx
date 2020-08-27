import React from "react";
import { useAddTodoContext } from "./AddTodoFormContext";

const AddTodoInput: React.FC = () => {
    const { todoInput, handleTodoChange } = useAddTodoContext();
    return <input type="text" value={todoInput} onChange={handleTodoChange} />;
};

export default AddTodoInput;
