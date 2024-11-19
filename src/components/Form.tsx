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

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default Form;
