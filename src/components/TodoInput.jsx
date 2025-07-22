function TodoInput(){
    return (
        <div className="container mt-4 mb-3">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <input 
                    type="text"
                    className="form-control rounded"
                    placeholder="Neues ToDo hinzufügen" 
                    />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary">Hinzufügen</button>
                </div>

            </div>

        </div>
    )

}

export default TodoInput;