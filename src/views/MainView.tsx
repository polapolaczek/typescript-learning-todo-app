import React from "react";
import { HEADER, ADD_BUTTON } from "../constants/labels";
import useTodos from "../common-hooks/useTodos";
import AddTodoInput from "../common-components/AddTodoForm/AddTodoInput";
import AddTodoButton from "../common-components/AddTodoForm/AddTodoButton";
import AddTodoForm from "../common-components/AddTodoForm/AddTodoForm";
import TodosList from "../common-components/TodosList";
import TodoItem from "../common-components/TodoItem";
import { ITodo } from "../types";

const MainView = () => {
    const { todos, addTodo } = useTodos();

    return (
        <>
            <h1>{HEADER}</h1>
            <AddTodoForm onAdd={addTodo}>
                <AddTodoInput />
                <AddTodoButton>{ADD_BUTTON}</AddTodoButton>
            </AddTodoForm>
            <TodosList todos={todos}>
                {(todo: ITodo) => <TodoItem {...todo} />}
            </TodosList>
        </>
    );
};

export default MainView;
