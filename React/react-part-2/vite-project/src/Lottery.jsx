import { useState } from "react"
import "./Lottery.css"
import { genTicket , sum } from "./Helpher"




export default function Lottery(){
    const [ticket , setTicket] = useState([genTicket(3)])
    let isWining = sum(ticket) === 15 ;

    function buyTicket(){
        setTicket(genTicket(3))
    }

    return(
        <div>
            <h1>Lottery Game! </h1>

        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <br /><br />
        <button onClick={buyTicket}>Buy new Ticket</button>
        <h3>{isWining && "Congratilation You Won the Game! "}</h3>
    </div>
    )
}