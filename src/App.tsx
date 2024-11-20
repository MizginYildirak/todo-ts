import React, {useState} from "react";
import "./App.css";
import Header from "../src/components/Header";
import TODOHero from "../src/components/TODOHero";
import Form from "../src/components/Form";
import TODOList from "../src/components/TODOList";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([]); 

  return (
    <div className="App">
      <Header />
      <TODOHero todos_completed={0} total_todos={0} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList  todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
