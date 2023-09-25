const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then( () => {console.log("server working")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatshap');
};

const allChat = [ 
    { 
        from: "Ankur",
        to: "Ankit",
        msg: "Hii My name is ankur",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "ankur",
        msg: "hello",
        created_at: new Date()
    },
    {
        from: "tanu",
        to: "ankur",
        msg: "Hii Ankur",
        created_at: new Date()
    },
    {
        from: "kittu",
        to: "ankur",
        msg: "Kaise ho ",
        created_at: new Date()
    }
]

// Chat.insertMany(allChat);