import type {TodoType} from "../../types/todoType.ts";
import s from "./todoItem.module.css";

type Props = {
  todo: TodoType;
  onToggle: (id: number) => void;
}

export const TodoItem = ({todo, onToggle}: Props) => {
  const handleClick = () => {
    onToggle(todo.id);
  };

  return (
    <li className={s.item} onClick={handleClick}>
      <span className={s.checkbox}>
        {todo.completed && (
          <svg
            viewBox="0 0 24 24"
            className={s.checkIcon}
            fill="none"
            stroke="#4caf50"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        )}
      </span>
      <span className={`${s.text} ${todo.completed ? s.completed : ""}`}>
        {todo.text}
      </span>
    </li>
  );
};
