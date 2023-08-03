//src/TodoApp/TodoList.js
import React from "react";

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <p key={todo.id}>
          <input
            type="text"
            value={todo.task}
            onChange={(e) => updateTodo(todo.id, e.target.value)}
          />
          <button onClick={() => deleteTodo(todo.id)}>Remove</button>
        </p>
      ))}
    </ul>
  );
}

export default TodoList;
