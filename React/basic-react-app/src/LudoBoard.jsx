import { useState } from "react"

export default function LudoBoard(){

    const [move , setMove] = useState({blue: 0 , yellow: 0, red: 0 , green: 0 })

   let random = Math.floor(Math.random()*6 + 1);
   

  function updateBlue(){
    move.blue = random ;
    setMove({...move});

    if(random == 6){
        console.log("You won!");
    }
  }
   
    // function updateBlue(){
    //     setMove( (prvMove)=> {
    //         return {...prvMove , blue: prvMove.blue+1 }
    //     });
    // }


    function updateYellow(){
        setMove( (prvMove)=> {
            return {...prvMove , yellow: prvMove.yellow+1 }
        });
    }
    function updateRed(){
        setMove( (prvMove)=> {
            return {...prvMove , red: prvMove.red+1 }
        });
    }
    function updateGreen(){
        setMove( (prvMove)=> {
            return {...prvMove , green: prvMove.green+1 }
        });
    }
    return(
        <>
            <p>Ludo begain</p>
            <div>
                <p>Blue move = {move.blue} </p>
                <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
                <p>Yellow move = {move.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor: "yellow"}}>+1</button>
                <p>Red move = {move.red}</p>
                <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>
                <p> Green move = {move.green}</p>
                <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1</button>
            </div>
        </>
    )
}