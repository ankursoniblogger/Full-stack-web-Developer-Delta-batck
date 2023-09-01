const express = require("express");
const app = express();


let port = 3000;



app.set("view engine", "ejs");

app.get("/" , (req,res) => {
    res.render("home.ejs");
});

app.get("/home" , (req,res) => {
    res.send("Home");
})

//  passing data to ejs 
// rolldice ik game hain 

// app.get("/rolldice" , (req,res) => {
//     res.render("rolldice.ejs");
// })

// uper walo ko hamne bas data file se render kiya hain jab data databased se aayege toh hum direct index.js matlb esse file mein render karenge 

app.get("/rolldice" , (req,res) => {
    let num = Math.floor(Math.random() * 6 ) + 1;
    res.render("rolldice.ejs" , {diceVal : num}); // esme dho value aayege pahle hum ejs file ko render karenge phir ik object ko 
});

// instagram ejs 

/*
app.get("/ig/:username" , (req,res) => {
    let followers = ["ankur" , "ankit" , "bob" , "abc"];
    let {username} = req.params;
    res.render("instagram.ejs" , {username , followers});
});
*/



// instagram page with ejs 

app.get("/ig/:username" , (req,res) => {
    let {username} = req.params;
    const instaData = require("./data.json"); // data ko access kiya databased se 
    const data = instaData[username];
    console.log(data);

    if(data){
        res.render("instagram.ejs" , {data});
    } else{
        res.render("errer.ejs")
    }
});




// serving static files 
app.use(express.static("public"));



app.listen(port,  () => {
 console.log("App is runing");
});

