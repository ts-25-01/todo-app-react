import TodoItem from "./TodoItem";

function TodoList(){
    return (
        <div className="card">
                <div className="card-header">
                    <h5>Meine ToDos</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <TodoItem/>
                        <TodoItem/>
                        <TodoItem/>
                        <TodoItem/>
                        <TodoItem/>
                        <TodoItem/>
                    </ul>
                </div>
             </div>
    )
}

export default TodoList;