import { useState, ChangeEvent, MouseEvent } from "react";

import "../styles/form.css";

function Form() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  console.log(todos);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
    console.log("Yeni görev:", todos);
  };

  return (
    <div>
      <form className="form">
        <label>
          <input
            type="text"
            name="todos"
            id="todos"
            placeholder="Write your next task"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>

        <button onClick={handleButton}>+</button>
      </form>

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
            key={index}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Form;
