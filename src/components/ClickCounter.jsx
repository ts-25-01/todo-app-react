import { useState } from "react";

function ClickCounter(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>Du hast {count} mal geklickt</p>
            <button onClick={handleIncrement}>Klick mich!</button>
        </div>
    )
}


export default ClickCounter;