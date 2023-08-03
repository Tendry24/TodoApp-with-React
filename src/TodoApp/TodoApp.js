//src/TodoApp/TodoApp.js
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import todosData from "../todosData";

function TodoApp() {
  const [todos, setTodos] = useState(todosData);

  const addNewTodo = (task) => {
    setTodos([...todos, { id: todos.length + 1, task, completed: false }]);
  };

  const updateTodo = (id, updatedTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoApp;
