import { useState } from "react";

export default function Joke(){
let [joke, setJoke] = useState({})

  const URL = "https://official-joke-api.appspot.com/random_joke";

let getJoke = async () => {
   let responce = await fetch(URL);
   let jsonResponce = await responce.json();
   console.log(jsonResponce);
   setJoke({setup: jsonResponce.setup , punchline: jsonResponce.punchline});

}


    return(
        <div>
            <h1>Jokes ! </h1>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
            <button onClick={getJoke}>New Joke</button>
        </div>
    )
}