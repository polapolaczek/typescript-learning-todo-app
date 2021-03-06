import { ITodo } from "../../types";
import useCreateControlledContext from "../../utils/useCreateControlledContext";

export interface ITodoItem {
    todo: ITodo;
    onRemove: (id: string) => void;
    onCompletion: (id: string) => void;
}

const [useTodoItemContext, TodoItemContext] = useCreateControlledContext<
    ITodoItem
>("TodoItemContext");

export { useTodoItemContext, TodoItemContext };
