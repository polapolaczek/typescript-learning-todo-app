import React from "react";
import {
    HEADER,
    ADD_BUTTON,
    REMOVE_BUTTON,
    DONE_BUTTON,
} from "../constants/labels";
import AddTodoForm, {
    Input,
    AddButton,
} from "../common-components/AddTodoForm/AddTodoForm";
import TodosList from "../common-components/TodosList";
import TodoItem, {
    Text,
    RemoveButton,
    DoneButton,
} from "../common-components/TodoItem/TodoItem";
import { ITodo } from "../types";
import { useTodosContext } from "../todos/TodosContext";

const MainView = () => {
    const { todos, addTodo, removeTodo, markAsDone } = useTodosContext();

    return (
        <>
            <h1>{HEADER}</h1>
            <AddTodoForm onAdd={addTodo}>
                <Input />
                <AddButton>{ADD_BUTTON}</AddButton>
            </AddTodoForm>
            <TodosList todos={todos}>
                {(todo: ITodo) => (
                    <TodoItem
                        todo={todo}
                        onRemove={removeTodo}
                        onDone={markAsDone}
                    >
                        <Text />
                        <RemoveButton>{REMOVE_BUTTON}</RemoveButton>
                        <DoneButton>{DONE_BUTTON}</DoneButton>
                    </TodoItem>
                )}
            </TodosList>
        </>
    );
};

export default MainView;
