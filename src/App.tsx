import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import s from "./App.module.css";
import { TodoList } from "./components/todoList/todoList.tsx";
import { TodoFooter } from "./components/todoFooter/todoFooter.tsx";
import { TodoInput } from "./components/todoInput/todoInput.tsx";
import type {FilterType} from "./types/todoType.ts";

function App() {
  const {
    addTodo,
    toggleTodo,
    deleteCompleted,
    activeCount,
    getFilteredTodos,
  } = useTodos();

  const [filter, setFilter] = useState<FilterType>("all");
  const filteredTodos = getFilteredTodos(filter);

  return (
    <div className={s.wrapper}>
      <h1>todos</h1>
      <div className={s.container}>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} />
        <TodoFooter
          activeCount={activeCount}
          filter={filter}
          setFilter={setFilter}
          onClear={deleteCompleted}
        />
      </div>
    </div>
  );
}

export default App;
