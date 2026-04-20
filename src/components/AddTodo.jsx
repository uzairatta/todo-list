import React, { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [currentTodo, setCurrentTodo] = useState("");

  function handleAddTodo(e) {
    e.preventDefault();
    if (currentTodo.trim() !== "") {
      setTodos((prev) => {
        return [...prev, currentTodo];
      });
      setCurrentTodo("");
    }
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <div>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter Todo to Add"
            value={currentTodo}
            onChange={(e) => setCurrentTodo(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;