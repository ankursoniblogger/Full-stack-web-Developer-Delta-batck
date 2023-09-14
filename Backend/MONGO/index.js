// require mongoose from website 
const mongoose = require('mongoose');

// create connection form website 
main().then( () => {
  console.log("Successfully conntected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}



// schema create  colums from website
const userSchema = new mongoose.Schema({
    name: String,   // datatype always start captail letter 
    email: String,
    age: Number,
});


// models cretae (class) 1st User models hain and 2nd user collection (table ) hain
const User = mongoose.model("User", userSchema);   // always use User (captial or singular )



// Insert data  😄 😍 💗
// const user1 = new User( {name:"Ankur soni" , email:"abc@gmail.com" , age: 20});

// save into database 
/*
user1.save().then((res) => {
    console.log(res)
}).catch( (err) => console.log(err)); */

// insert many 

// User.insertMany( [ 
//     {name:"ankit", email:"asd@gmail.com", age:23},
//     {name:"durgesh" , email:"dur@gmail.com" , age: 18}
// ]).then((res) => {console.log(res)} ).catch( (err) => console.log(err));


// find  😄 😍 💗

// User.find({ }).then((res) => {console.log(res)} ).catch( (err) => console.log(err));

// User.findById("6502c24d864a0bae4ebfee09").then((res) => {console.log(res)} ).catch( (err) => console.log(err));



// update  😄 😍 💗

// User.updateOne({_id:"6502c24d864a0bae4ebfee09"} , {email:"ankitsoni@gmail.com"}).then((res) => {console.log(res)}).catch((err) => console.log(err));

// User.updateMany({name:"ankit"} , {email:"ankitsoni@gmail.com"}).then((res) => {console.log(res)}).catch((err) => console.log(err));

// ager hame vscode keterminal mein update dakna hain toh 2 menthod hain usko use krte hain

// User.findOneAndUpdate({name:"ankit"}, {email:"ankit@gmail.com"}, {new:true}).then((res) => {console.log(res)}).catch((err) => console.log(err));

// User.findByIdAndUpdate({_id:"6502c1f76da636e948dae233"}, {email:"ankitsonii@gmail.com"}, {new:true}).then((res) => {console.log(res)}).catch((err) => console.log(err));

// delete 😄 😍 💗

// User.deleteOne({name:"Ankur soni"}).then((res) => {console.log(res)}).catch((err) => console.log(err));

// User.deleteMany({name:"ankit"}).then((res) => {console.log(res)}).catch((err) => console.log(err));

// User.findOneAndDelete({name:"Ankur soni"},{new:true}).then((res) => {console.log(res)}).catch((err) => console.log(err));

// User.findByIdAndDelete("6502c24d864a0bae4ebfee0a",{new:true}).then((res) => {console.log(res)}).catch((err) => console.log(err));





