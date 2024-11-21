import React, { useState, ChangeEvent, MouseEvent } from "react";
import TODOList from "./TODOList";
import "../styles/form.css";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface FormProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

//the object taken must be the FormProps type
function Form({ todos, setTodos }: FormProps) {
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
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
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
    </div>
  );
}

export default Form;
