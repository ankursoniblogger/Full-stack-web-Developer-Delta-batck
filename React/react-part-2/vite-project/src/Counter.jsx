import { useEffect, useState } from "react"

export default function Counter(){
    let [count, setCount] = useState(0)

    function incCount(){
        setCount( (currCount) => currCount + 1)
    }
    
useEffect( () => {
    console.log("click me");
})

    return(

        <div>
        <h2>Count = {count} </h2>
         <button onClick={incCount}>+1</button>
        </div>


    )
}