import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ClickCounter from "./components/ClickCounter";
import { useEffect, useState } from "react";
import { use } from "react";

function App() {
  // Zentraler State für alle Todos
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

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
    // console.log("Läuft nach jedem Rendern");
  });

  useEffect(() => {
    // console.log("Läuft nur einmal");
  }, []);

  useEffect(() => {
    // console.log("Das ist der aktuelle Count", count);
  }, [count]);

  // Warum brauchen wir useEffect für API Calls? --> API Call nach dem ersten Rendern

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch(`http://localhost:3000/todos`);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        // Speichere dir die response im json-Format in der Konstanten todosFromAPI
        const todosFromAPI = await response.json();
        // console.log(todosFromAPI);
        setTodos(todosFromAPI);
        setTimeout(() => {
          // console.log("Timer beendet");
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Fehler beim Laden", error);
      }
    }
    fetchTodos(); // Funktion soll aufgerufen werden
  }, [])

  // Neues Todo hinzufügen
  const handleAddTodo = async (title) => {
    try {
      const response = await fetch(`http://localhost:3000/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Shorthand Property Name: title: title kann durch title ersetzt werden 
        // Backend setzt completed auf false standardmäßig, deswegen muss das nicht mitgeschickt werden
        body: JSON.stringify({ title })
      });
      if (!response.ok) {
        throw new Error("Fehler beim Hinzufügen von dem Todo");
      }
      const newTodoFromAPI = await response.json();
      // Wir müssen den Zustand der todos aktualisieren
      setTodos([newTodoFromAPI, ...todos]);
    } catch (error) {
      console.error("Fehler: ", error);
      alert("Das Hinzufügen ist fehlgeschlagen")
    }
  };


  // Todo löschen
  const handleDeleteTodo = async (todoId) => {
    try {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
      const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      console.log(`Todo ${todoId} wurde erfolgreich gelöscht`);
    } catch (error) {
      console.error("fehler", error);
    }
  };

  // Status Togglen vom Todo
  const handleToggleTodo = async (todoId) => {
    try {
      // Finde das richtige Todo aus der Liste
      const todo = todos.find((t) => t.id === todoId);
      if (todo === undefined){
        throw new Error("Bitte gib gültige ID ein");
      };
      // Aktualisiere das gefundene Objekt mit invertierten Status
      // ...todo = "id": 4, "title": "Test4", "completed": true, completed: false
      const updatedTodo = { ...todo, completed: !todo.completed };
      // todos bildet unseren aktuellen Zustand an todos, also ein Array von Objekten
      // Wir wollen ein bestimmtes Todo ändern, alle anderen sollen gleich bleiben
      // Achtung: In React dürfen wir den State nicht direkt ändern! --> Immutable
      // map-Funktion: iteriert über jedes Element aus dem Array, gibt eine neue Kopie zurück
      // und für jedes Element wird entschieden, was zurückkommt
      // für jedes t: prüfe ob t.id === todoOd ist, falls ja, dann nimm dafür updatedTodo
      // Falls nicht, übernimm das alte todo
      setTodos(todos.map((t)=> (t.id === todoId ? updatedTodo : t)));

      const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(updatedTodo)
        })
    } catch (error) {
      
    }
  }

  return (
    <>
      <Header name="Hanswurst" date="22-07-2025" />
      <div>
        {loading ? <p>Lade Todos...</p> : <p>Todos geladen!</p>}
      </div>
      <div className="container border mt-5 p-3">
        {/* Für unseren Lifting State Up: Gib die Funktion an die Komponente weiter! */}
        <TodoInput onAddTodo={handleAddTodo} />
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
      </div>
      <div>
        <p>Du hast {count} mal geklickt</p>
        <button onClick={handleIncrement}>Klick mich!</button>
      </div>
      {/* <ClickCounter /> */}
    </>
  )
}

export default App;