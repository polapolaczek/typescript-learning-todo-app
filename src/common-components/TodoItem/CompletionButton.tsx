import React from "react";
import Button from "../Button";
import { useTodoItemContext } from "./TodoItemContext";

type CompletionButton = {
    texts: string[];
};

const CompletionButton: React.FC<CompletionButton> = (props) => {
    const {
        todo: { id, isDone },
        onCompletion,
    } = useTodoItemContext();
    const [doneText, undoneText] = props.texts;
    return (
        <Button
            type="button"
            onClick={() => onCompletion(id)}
            text={isDone ? undoneText : doneText}
        />
    );
};
export default CompletionButton;
