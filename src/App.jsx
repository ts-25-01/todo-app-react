import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ClickCounter from "./components/ClickCounter";
import { useState } from "react";

function App() {
  // Zentraler State für alle Todos
  const [todos, setTodos] = useState([
    { "id": 1, "title": "pause machen", "completed": true, "date": "02.07.2025" },
    { "id": 2, "title": "putzen", "completed": false, "date": "03.07.2025" },
    { "id": 3, "title": "waschen", "completed": false, "date": "03.07.2025" }
  ]);

  return (
    <>
      <Header name="Hanswurst" date="22-07-2025" />
      <div className="container border mt-5 p-3">
        <TodoInput />
        <TodoList todos={todos}/>
      </div>
      <ClickCounter />
    </>
  )
}

export default App;