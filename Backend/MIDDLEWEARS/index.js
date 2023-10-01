const express = require("express");
const app = express();
const expressError = require("./expressError")

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
    } 
    throw new expressError( 401, "Access denied")
})


app.get("/api" , (req,res) => {
    res.send("data ")
})






// error handling middlewears 

// app.use((req,res) => {
    //     res.send("404 page not found")
// });


app.get("/err" , (req,res) => {
    abcd = abcd 
})

app.use((err, req,res,next) => {
    let {status = 500 , message = "Some ERROR"} = err ;
    res.status(status).send(message);
})








app.get("/" , (req,res) => {
    res.send("working clear")
});

app.get("/random" , (req,res) => {
    res.send("I am random ")
});


app.listen(3000, () => {
    console.log("Server is on ")
})