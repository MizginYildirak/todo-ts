import { useState, ChangeEvent, MouseEvent } from "react";
import TODOList from "./TODOList"

import "../styles/form.css";

interface Todo {
  id: number,
  task: string,
  completed: boolean
}

function Form() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: todos.length + 1,
      task: inputValue,
      completed: false
    }

    console.log(newTodo)

    setTodos([...todos, newTodo]);
    setInputValue("");
    console.log("Yeni görev:", todos);
  }

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

    <TODOList todos={todos}/>
    </div>
  );
}
export default Form;
