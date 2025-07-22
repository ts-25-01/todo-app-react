import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App(){
  return (
    <>
    <Header/>
    <div className="container border mt-5 p-3">
      <TodoInput/>
      <TodoList/>
    </div>
    </>
  )
}

export default App;