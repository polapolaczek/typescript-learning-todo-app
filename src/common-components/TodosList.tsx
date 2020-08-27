import React from "react";
import { ITodo } from "../types";

type TodosListProps = {
    todos: ITodo[];
    children: (el: ITodo) => React.ReactNode;
};

const TodosList: React.FC<TodosListProps> = ({ todos, children }) => (
    <ul>
        {todos.map((el) => (
            <li key={el.id}>{children(el)}</li>
        ))}
    </ul>
);

export default TodosList;
