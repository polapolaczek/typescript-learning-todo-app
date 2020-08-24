import React from "react";
import { useAddTodoContext } from "./AddTodoFormContext";

const AddTodoInput = () => {
    const { todoInput, handleTodoChange } = useAddTodoContext();
    return <input type="text" value={todoInput} onChange={handleTodoChange} />;
};

export default AddTodoInput;
