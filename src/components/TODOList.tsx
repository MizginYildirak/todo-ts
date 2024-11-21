import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TODOListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TODOList({ todos, setTodos }: TODOListProps) {
  const handleDeleteButton = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
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
          }}
          key={todo.id}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid green",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            ></div>
            {todo.task}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FiEdit style={{ fontSize: "25px" }} />
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

export default TODOList;
