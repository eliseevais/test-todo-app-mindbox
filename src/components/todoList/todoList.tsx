import type { TodoType } from "../../types/todoType.ts";
import { TodoItem } from "../todoItem/todoItem.tsx";
import s from "./todoList.module.css";

type Props = {
  todos: TodoType[];
  onToggle: (id: number) => void;
}

export const TodoList = ({ todos, onToggle }: Props) => (
  <ul className={s.list}>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
    ))}
  </ul>
);
