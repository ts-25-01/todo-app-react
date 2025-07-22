function Header({name, date}) {
    return (
        <div className="container mt-7">
            <h1 className="mb-6 text-center border">Todo-Liste von {name} vom {date}</h1>
            <p className="text-primary border text-center">
                Was du heute kannst besorgen, verschieb auf Morgen-Liste!
            </p>
        </div>
    )
}

export default Header;