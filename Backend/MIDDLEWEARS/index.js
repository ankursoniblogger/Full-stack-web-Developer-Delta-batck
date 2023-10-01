const express = require("express");
const app = express();

//MIDDLEWEARS 

// app.use( (req,res, next) => {
//     console.log("I am middlewears");
//     // res.send("Middlwears")
//     next()
// })


// utility middlewears
// app.use((req,res,next) => {
//     req.responseTime = new Date( Date.now()).toLocaleString()
//     console.log(req.method, req.hostname,req.responseTime);
//     console.log("I am middlewears")
//     next();
// })


// app.use("/random" , (req,res ,next) => {
//     // res.send("I am 2nd middlewears");
//     console.log("jiiii")
//  next();
// })


app.use("/api" , (req,res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    } else{
        res.send("ACCESS DENIGN !")
    }
})

app.get("/api" , (req,res) => {
    res.send("data ")
})

app.get("/" , (req,res) => {
    res.send("working clear")
});

app.get("/random" , (req,res) => {
    res.send("I am random ")
});


// error handling middlewears 

// app.use((req,res) => {
//     res.send("404 page not found")
// });



app.listen(3000, () => {
    console.log("Server is on ")
})