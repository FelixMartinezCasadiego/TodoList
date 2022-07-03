import { useCounter } from '../hooks/useCounter';
import { useState } from "react";

const heavyStuff = (iterationNumber = 100) => {
    for(let i =0; i < iterationNumber; i++){
        console.log('ahi vamos...')
    }

    return `${iterationNumber} iteraciones realizadas`
} 

export const MemorizeHook = () => {

    const {counter, increment} = useCounter( 4000 );
    

    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <small> {counter} </small> </h1>
            <hr />

            <h4> {heavyStuff(counter)} </h4>
            <button 
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-primary"
                onClick={() => setShow()}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
