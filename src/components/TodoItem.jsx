import { useState } from "react";

function TodoItem({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.title);

    const handleDeleteClick = () => {
        const confirmed = window.confirm(`${todo.title} wirklich löschen?`);
        if (confirmed) {
            onDeleteTodo(todo.id);
        }
    }

    const handleInputChange = (event) => {
        // console.log("Value vom Input Field", event.target.value);
        setEditText(event.target.value);
        console.log(editText);
    }

    const handleEditSave = () => {
        if (editText.trim() === ""){
            alert("Bitte gib einen Titel ein")
            return;
        }
        // console.log("Jetzt wurde das geupdated");
        onEditTodo(todo.id, editText.trim());
        setIsEditing(false);
        
    }

    const handleEditCancel = () => {
        setEditText(todo.title);
        setIsEditing(false);
    }


    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="form-check">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleTodo(todo.id)}
                        className="form-check-input"
                    />
                    {/* Mache ein input-Field wenn Editier-Modus an, ansonsten normale label-Darstellung */}
                    {isEditing ? (
                        <>
                            <input type="text"
                                className="form-control mx-5"
                                value={editText}
                                onChange={handleInputChange}
                            />

                        </>

                    ) :
                        <label
                            className="form-check-label ms-2"
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.title}
                        </label>
                    }
                </div>
                <div>
                    {isEditing ?
                    <>
                        <button type="submit" className="btn btn-sm mx-auto btn-success me-2" onClick={handleEditSave}>💾</button>
                        <button type="submit" className="btn btn-sm mx-auto btn-success me-2" onClick={handleEditCancel}>❌</button>
                    </>
                        :
                        <></>
                    }
                    <button className="btn btn-warning btn-sm me-2" onClick={() => { setIsEditing(!isEditing) }}>✏️</button>
                    <button className="btn btn-danger btn-sm" onClick={handleDeleteClick}>🗑️</button>
                </div>
            </li>
        </>
    )
}

export default TodoItem;