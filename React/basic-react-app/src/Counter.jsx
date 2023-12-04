import { useState } from "react";


export default function Counter(){
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count+10)
    }
    return(
        <>
            <h1>count = {count}</h1>
            <button onClick={increase}>Increase</button>
        </>
    )
}