import { useState } from "react";

function TodoInput({onAddTodo}) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        // console.log("Value vom Input Field", event.target.value);
        setInputValue(event.target.value);
        // console.log(inputValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //Verhindert den Seiten-Reload
        console.log("button wurde gedrückt");
        if (inputValue.trim() === ""){
            alert("Bitte gib einen Titel ein")
            return;
        }
        onAddTodo(inputValue);
        setInputValue("");
    }

    return (
        <div className="container mt-4 mb-3">
            <form onSubmit={handleSubmit}>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Neues ToDo hinzufügen"
                            value={inputValue} 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">Hinzufügen</button>
                    </div>

                </div>
            </form>

        </div>
    )

}

export default TodoInput;