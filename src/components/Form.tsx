import { useState } from "react";

import "../styles/form.css";

function Form() {
  const [todo, setTodo] = useState<string>("");

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleButton = (event) => {
    event.preventDefault();
    console.log("Yeni görev:", todo);
  };

  return (
    <form className="form">
      <label>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
          value={todo}
          onChange={handleInputChange}
        />
      </label>

      <button onClick={handleButton}>+</button>
    </form>
  );
}
export default Form;
