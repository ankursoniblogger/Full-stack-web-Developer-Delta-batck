const express = require("express");
const app = express();
const port = 3000;

// jab bhi hame post req bejna hoga ye dho line generally likhte hain
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/resister", (req,res) => {
 let {user,password} = req.query;
  res.send(`Standerd GET responce Welcome ${user}`);
});


app.post("/resister", (req,res) => {
    let {user,password} = req.body ;
    res.send(`Standerd POST responce. Welcome ${user}`);
  });


app.listen(port,  () => {
    console.log("server is running");
});
