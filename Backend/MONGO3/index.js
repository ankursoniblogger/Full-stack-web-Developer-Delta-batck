const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
const methodOverride = require('method-override')
app.use(methodOverride('_method'))


main().then( () => {console.log("server working")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatshap');
};


app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname, "public")));
// jab post request create krte hain tab yeh likte 
app.use(express.urlencoded({extended: "true"}));




// index route 


app.get("/chats" , async (req,res) => {
    let chats =  await Chat.find(); // databased se data lana
    // console.log(chats)
    res.render("index.ejs", {chats})
})

// new route .

app.get("/chats/new" , (req,res) => {
    res.render("new.ejs")
});

// create route 

app.post("/chats", (req,res) => {
    let  { from , to, msg} = req.body;
    let newChat = new Chat( {
        from: from ,
        to: to,
        msg: msg,
        created_at: new Date()
    })
    // console.log(newChat);
    newChat.save().then(res => {console.log("chat was saved")}).catch(err => {console.log(err)})
    res.redirect("/chats");
})



// Edit and update route 

app.get("/chats/:id/edit" , async (req,res) => {
    let {id} = req.params;
    let chat = await  Chat.findById(id)
    res.render("edit.ejs" , {chat})
})

// UPDATE ROUTE

app.put("/chats/:id" ,  async (req,res) => {
    let {id} = req.params;
  let {msg: newMsg} = req.body;
  let updateChat = await Chat.findByIdAndUpdate(id, {msg: newMsg} , {runValidators: true} , { new: true});
//   console.log(updateChat);
  res.redirect("/chats")
})


// delete route 


app.delete("/chats/:id" , async(req,res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
})


app.get("/" , (req,res) => {
    res.send("working")
})

let port = 3000;
app.listen(port , () => {
    console.log("app starting")
})




































// const chat1 = new Chat({
//     from: "Ankur",
//     to: "Ankit",
//     msg: "Hii My name is ankur",
//     created_at: new Date()
// });

// chat1.save().then((res) => {console.log(res)});

// Chat.deleteMany( {from: "ankur"})
// Chat.deleteMany({to:"ankit"}).then((res) => {console.log(res)}).catch((err) => console.log(err));
// Chat.findByIdAndDelete("65095fd09c670c2fa16cf989",{new:true}).then((res) => {console.log(res)}).catch((err) => console.log(err));
