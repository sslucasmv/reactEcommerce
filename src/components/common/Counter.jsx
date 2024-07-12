import { useState } from "react";

export const Counter = () => {

    const [ counter,funcionDelCounter] = useState( 0 )
    console.log(counter)

    const sumar = () => {
        funcionDelCounter( counter + 1)
    }

    return <div>
        <button onClick={sumar} >Sumar</button>
        <h4>{counter}</h4>
        <button>Restar</button>
    </div>
    
}