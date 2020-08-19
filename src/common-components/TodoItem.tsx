import React from "react";
import { ITodo } from "../types";

const TodoItem = ({ text }: ITodo) => <div>{text}</div>;

export default TodoItem;
