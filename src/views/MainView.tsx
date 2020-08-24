import React from "react";
import {
    HEADER,
    ADD_BUTTON,
    REMOVE_BUTTON,
    DONE_BUTTON,
    UNDONE_BUTTON,
    ACTIVE_TODOS_HEADER,
    COMPLETED_TODOS_HEADER,
} from "../constants/labels";
import AddTodoForm, {
    Input,
    AddButton,
} from "../common-components/AddTodoForm/AddTodoForm";
import TodosList from "../common-components/TodosList";
import TodoItem, {
    Text,
    RemoveButton,
    CompletionButton,
} from "../common-components/TodoItem/TodoItem";
import { ITodo } from "../types";
import { useTodosContext } from "../todos/TodosContext";

const MainView = () => {
    const {
        activeTodos,
        completedTodos,
        addTodo,
        removeTodo,
        toggleDone,
    } = useTodosContext();

    return (
        <>
            <h1>{HEADER}</h1>
            <AddTodoForm onAdd={addTodo}>
                <Input />
                <AddButton>{ADD_BUTTON}</AddButton>
            </AddTodoForm>
            { activeTodos.length ? <h3>{ACTIVE_TODOS_HEADER}</h3> : null}
            <TodosList todos={activeTodos}>
                {(todo: ITodo) => (
                    <TodoItem
                        todo={todo}
                        onRemove={removeTodo}
                        onCompletion={toggleDone}
                    >
                        <Text />
                        <RemoveButton>{REMOVE_BUTTON}</RemoveButton>
                        <CompletionButton
                            texts={[DONE_BUTTON, UNDONE_BUTTON]}
                        />
                    </TodoItem>
                )}
            </TodosList>
            { completedTodos.length ? <h3>{COMPLETED_TODOS_HEADER}</h3> : null}
            <TodosList todos={completedTodos}>
                {(todo: ITodo) => (
                    <TodoItem
                        todo={todo}
                        onRemove={removeTodo}
                        onCompletion={toggleDone}
                    >
                        <CompletionButton
                            texts={[DONE_BUTTON, UNDONE_BUTTON]}
                        />
                        <Text />
                    </TodoItem>
                )}
            </TodosList>
        </>
    );
};

export default MainView;
