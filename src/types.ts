export interface ITodo {
    text: string;
    id: string;
    isDone: boolean;
}
export interface ITodos {
    todos: ITodo[];
    addTodo: (text: string, id: string) => void;
    removeTodo: (id: string) => void;
    markAsDone: (id: string) => void;
}

export type $TSFixMe = any;
