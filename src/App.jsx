import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ClickCounter from "./components/ClickCounter";
import { useEffect, useState } from "react";
import { use } from "react";

function App() {
  // Zentraler State für alle Todos
  const [todos, setTodos] = useState([
    // { "id": 1, "title": "pause machen", "completed": true, "date": "02.07.2025" },
    // { "id": 2, "title": "putzen", "completed": false, "date": "03.07.2025" },
    // { "id": 3, "title": "waschen", "completed": false, "date": "03.07.2025" }
  ]);
  const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

  // Beispiel für Syntax von useEffect-Hook
  // useEffect(() => {
  //   // Hier steht dann der Side-Effect drin, wie z.B. das Fetchen von der API
  // }, [dependencies])
  // Was macht dieses dependencies als Array? --> Steuert, wann der Effekt ausgeführt wird
  // Wenn wir nichts reinschreiben, also wenn das Array fehlt, dann läuft der Effekt nach jedem Rendern (gefährlich!)
  // Wenn leeres Array [], dann läuft es genau einmal nach dem ersten Rendern
  // Mit Werten im Array, dann läuft der Effekt nur wenn sich die Werte ändern

  useEffect(() => {
    console.log("Läuft nach jedem Rendern");
  });

  useEffect(() => {
    console.log("Läuft nur einmal");
  }, []);

  useEffect(() => {
    console.log("Das ist der aktuelle Count", count);
  }, [count]);

  // Warum brauchen wir useEffect für API Calls? --> API Call nach dem ersten Rendern

  useEffect(() => {
    async function fetchTodos(){
      try {
        const response = await fetch(`http://localhost:3000/todos`);
        if (!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }
        // Speichere dir die response im json-Format in der Konstanten todosFromAPI
        const todosFromAPI = await response.json();
        console.log(todosFromAPI);
        setTodos(todosFromAPI);
      } catch (error) {
        console.error("Fehler beim Laden", error);
      } 
    }
    fetchTodos(); // Funktion soll aufgerufen werden
  }, [])

  return (
    <>
      <Header name="Hanswurst" date="22-07-2025" />
      <div className="container border mt-5 p-3">
        <TodoInput />
        <TodoList todos={todos}/>
      </div>
      <div>
            <p>Du hast {count} mal geklickt</p>
            <button onClick={handleIncrement}>Klick mich!</button>
        </div>
      <ClickCounter />
    </>
  )
}

export default App;