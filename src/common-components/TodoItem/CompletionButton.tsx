import React from "react";
import Button from "../Button";
import { useTodoItemContext } from "./TodoItemContext";

type CompletionButton = {
    texts: string[];
};

const CompletionButton = (props: CompletionButton) => {
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
