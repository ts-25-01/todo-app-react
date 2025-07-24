function TodoItem({todo, onDeleteTodo}){
    const handleDeleteClick = () => {
        const confirmed = window.confirm(`${todo.title} wirklich löschen?`);
        if (confirmed){
            onDeleteTodo(todo.id);
        }
    }


    return (
        <>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check">
        <input 
        type="checkbox"
        checked={todo.completed}
        className="form-check-input"
        />
        <label 
        className="form-check-label ms-2"
        style={{textDecoration: todo.completed ? 'line-through': 'none'}}>
            {todo.title}
            </label>
        </div>
        <div>
            <button className="btn btn-warning btn-sm me-2">✏️</button>
            <button className="btn btn-danger btn-sm" onClick={handleDeleteClick}>🗑️</button>
        </div>
        </li>
        </>
    )
}

export default TodoItem;