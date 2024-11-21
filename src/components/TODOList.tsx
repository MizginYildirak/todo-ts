import React, { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { AiFillDelete } from "react-icons/ai"

interface Todo {
  id: number
  task: string
  completed: boolean
}

interface TODOListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TODOList({ todos, setTodos }: TODOListProps) {
  const handleDeleteButton = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCompleted = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <ul
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {todos.map((todo) => (
        <li
          style={{
            textAlign: "start",
            listStyleType: "none",
            border: "1px solid #88ab55",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: todo.completed ? "black" : "black", 
          }}
          key={todo.id}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
              style={{ cursor: "pointer" }}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FiEdit style={{ fontSize: "25px", cursor: "pointer" }} />
            <AiFillDelete
              onClick={() => handleDeleteButton(todo.id)}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}


export default TODOList