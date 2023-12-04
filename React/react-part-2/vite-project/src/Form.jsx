//  normal form 
/*
import { useState } from "react"


export default function Form(){
const [fullName, setFullName] = useState("")


let handleFormControl = (event) => {
    setFullName(event.target.value) ;
}


    return(
        <form >
        <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter Your name" value={fullName} onChange={handleFormControl} id="username"/>
            <button >Submit</button>
        </form>
    )
} */


// multiple input form 


import { useState } from "react"


export default function Form(){
const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: ""
})

let handleInputChange = (event) => {
setFormData( (currData) => {
    return { ...currData , [event.target.name]: event.target.value}
})
}


// submit form
 let handleSubmit = (event) => {
  event.preventDefault();
  setFormData({
    fullName: "",
    username: "",
    password: ""
  })
 }




    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">FullName</label>
            <input type="text" placeholder="Enter Your name" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName"/>
            <br /> <br />
            <label htmlFor="username">Username</label>
            <input type="username" placeholder="Enter Your username" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
            <br /><br />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="Enter Your password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
            <button >Submit</button>
        </form>
    )
} 
