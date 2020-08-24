export interface ITodo {
    text: string;
    id: string;
}
export interface ITodos {
    todos: ITodo[];
    addTodo: (text: string, id: string) => void;
    removeTodo: (id: string) => void;
}

export type $TSFixMe = any;