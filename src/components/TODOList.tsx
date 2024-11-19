import React from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}



interface TODOListProps {
  todos: Todo[];
}

function TODOList({ todos }: TODOListProps) {
  return (
    <ul
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {todos.map((todo, index) => (
        <li
          style={{
            textAlign: "start",
            listStyleType: "none",
            border: "1px solid #88ab55",
            padding: "15px",
          }}
          key={todo.id}
        >
          {todo.task}
        </li>
      ))}
    </ul>
  );
}
export default TODOList;
