import React from "react";
import "./App.css";
import Header from "../src/components/Header";
import TODOHero from "../src/components/TODOHero";
import Form from "../src/components/Form";
import TODOList from "../src/components/TODOList";

function App() {
  return (
    <div className="App">
      <Header />
      <TODOHero todos_completed={0} total_todos={0} />
      <Form />
      <TODOList todos={[]} />
    </div>
  );
}

export default App;
