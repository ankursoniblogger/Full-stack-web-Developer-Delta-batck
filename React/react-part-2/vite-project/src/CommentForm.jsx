import { useState } from "react" ;

export default function CommentForm(){
let [formData , setFormData] = useState({
username: "",
remark: "",
rating: 5
})

let handleInputChange = (event) => {
    setFormData( (currData) => {
        return { ...currData , [event.target.name] :  event.target.value}
    })
}

let handleSubmit = (event) => {
    console.log(formData);
   event.preventDefault();
   setFormData({
    username: "",
    remark: "",
    rating: 5
   })
}

    return(
        <div><h4>Welcome to Comment! </h4>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>  &nbsp;
            <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} name="username" id="username"/> <br /><br />

             <label htmlFor="remark">Remark</label> &nbsp;
            <textarea id="remark" placeholder="Add a remark" value={formData.remark} onChange={handleInputChange}  name="remark"></textarea> <br /><br />

            <label htmlFor="rating">Rating</label> &nbsp;
            <input min={1} max={5} id="rating" type="rating" value={formData.rating} onChange={handleInputChange}  name="rating" /> <br /><br />

            <button>Submit </button>
        </form>
        </div>
    )
}