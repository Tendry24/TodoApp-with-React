//Just a component to display the to-do list and enable updating and deletion.
import React from "react";

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <div>
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
    </div>
  );
}

export default TodoList;
