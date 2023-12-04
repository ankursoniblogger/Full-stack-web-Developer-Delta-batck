import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TudoList() {
  const [tudos, setTudos] = useState([ {task: "sample task" , id: uuidv4() , isDone: false}]);
  const [newTudo , setNewTudo ] = useState("");


  function update(){
    setTudos([...tudos , {task: newTudo, id: uuidv4() , isDone: false}]);
    setNewTudo("")
  }

  function updateTudoValue(event){
    setNewTudo(event.target.value)
  }

  function deleteTudo(id){
  setTudos( (prevTudo) => tudos.filter( (prevTudo) => prevTudo.id != id))
  }

// to uppercase all 
 
let upperCaseAll = () => {
  setTudos( (prevTudo) => 
  prevTudo.map( (tudo) => {
    return {
        ...tudo , task: tudo.task.toUpperCase()
    }
  }))
}

let markAsDone = (id) => {
    setTudos(tudos.map( (tudo) => {
        if(tudo.id === id ){
            return{
              ...tudo , isDone:true 
            }
        } else{
            return tudo ;
        }
    }))
}




  return (
    <div>
      <input type="text" placeholder="Add new Tudo" value={newTudo}  onChange={updateTudoValue}/>
      <button onClick={update}>Add</button>
      <br />
      <br /> <hr />
      <p>Tudo List </p>
      <ul>
        {tudos.map((tudo) => {
          return (
            <li key={tudo.id}> <span style={tudo.isDone ? {textDecorationLine: "line-through" , color: "red"} : {} }>{tudo.task}</span> &nbsp;
              <button onClick={() =>  deleteTudo(tudo.id)}>Delete</button>
              <button onClick={() =>  markAsDone(tudo.id)}>Mark as Done</button> 
              </li> );
        })}
      </ul> 
      <br /><br />
      <button onClick={upperCaseAll}> Uppercase All</button>
    </div>
  );
}
