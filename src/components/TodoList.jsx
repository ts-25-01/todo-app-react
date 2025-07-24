import TodoItem from "./TodoItem";

function TodoList({todos, onDeleteTodo}){
    return (
        <div className="card">
                <div className="card-header">
                    <h5>Meine ToDos</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {todos.map(
                            todo => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onDeleteTodo={onDeleteTodo}
                                    />
                            )
                        )}
                    </ul>
                </div>
             </div>
    )
}

export default TodoList;