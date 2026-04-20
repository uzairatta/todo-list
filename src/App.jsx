import React, { useState } from "react";
import "./App.css";
import Addtodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  function deleteTodo(todoToDelete) {
    const filteredTodos = todos.filter((td) => td !== todoToDelete);
    setTodos(filteredTodos);
  }

  function startEdit(index, todoText) {
    setEditingIndex(index);
    setEditingText(todoText);
  }

  function saveEdit() {
    if (editingText.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = editingText;
      setTodos(updatedTodos);
      setEditingIndex(null);
      setEditingText("");
    }
  }

  function cancelEdit() {
    setEditingIndex(null);
    setEditingText("");
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Addtodo setTodos={setTodos} />

      {todos.map((td, index) => {
        return (
          <div className="todo-div" key={index}>
            <div className="todo-container">
              {editingIndex === index ? (
                // Edit Mode
                <div className="edit-mode">
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="edit-input"
                    autoFocus
                  />
                  <div className="edit-buttons">
                    <button className="btn-save" onClick={saveEdit}>
                      Save
                    </button>
                    <button className="btn-cancel" onClick={cancelEdit}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // Normal Mode
                <>
                  <h2>{td}</h2>
                  <div>
                    <button 
                      className="btn-edit" 
                      onClick={() => startEdit(index, td)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn-delete" 
                      onClick={() => deleteTodo(td)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;