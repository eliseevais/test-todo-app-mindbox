import { renderHook, act } from '@testing-library/react';
import { useTodos } from "../hooks/useTodos";

describe("useTodos hook", () => {
  test("initial todos are set correctly", () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos.length).toBe(3);
    expect(result.current.activeCount).toBe(2); // 2 не завершенных
  });

  test("addTodo adds a new todo", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("New task");
    });

    expect(result.current.todos.length).toBe(4);
    expect(result.current.todos.some(t => t.text === "New task")).toBe(true);
    expect(result.current.activeCount).toBe(3);
  });

  test("toggleTodo change filter completed", () => {
    const { result } = renderHook(() => useTodos());
    const todoId = result.current.todos[0].id;
    const initialCompleted = result.current.todos[0].completed;
    const initialActiveCount = result.current.activeCount;

    act(() => {
      result.current.toggleTodo(todoId);
    });

    const toggledTodo = result.current.todos.find(t => t.id === todoId);
    expect(toggledTodo?.completed).toBe(!initialCompleted);

    expect(result.current.activeCount).toBe(
      initialCompleted ? initialActiveCount + 1 : initialActiveCount - 1
    );
  });

  test("deleteCompleted delete completed todo", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.deleteCompleted();
    });

    expect(result.current.todos.every(t => !t.completed)).toBe(true);
  });

  test("getFilteredTodos return correct lists", () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.getFilteredTodos("all").length).toBe(3);
    expect(result.current.getFilteredTodos("active").every(t => !t.completed)).toBe(true);
    expect(result.current.getFilteredTodos("completed").every(t => t.completed)).toBe(true);
  });
});
