import { useState } from "react";
import type {FilterType, TodoType} from "../types/todoType.ts";

export const useTodos = () => {
  const initialTodos: TodoType[] = [
    { id: 1, text: "Тестовое задание", completed: false },
    { id: 2, text: "Прекрасный код", completed: true },
    { id: 3, text: "Покрытие тестами", completed: false },
  ];

  const [todos, setTodos] = useState<TodoType[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo: TodoType = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const activeCount = todos.filter(todo => !todo.completed).length;

  const getFilteredTodos = (filter: FilterType) => {
    switch (filter) {
      case "active":
        return todos.filter(t => !t.completed);
      case "completed":
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteCompleted,
    activeCount,
    getFilteredTodos,
  };
};
