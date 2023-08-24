const express = require("express"); // express ase a function 
 const app = express();
//  console.log(app);


// esse pta hota hain server start ho gya 
let port = 8080;

app.listen(port, () => {
    console.log(`app is lisiting on port ${port}`);
});



// routing 
/*
app.get("/", (req,res) => {
    res.send("this is root path ")
});

app.get("/apple", (req,res) => {
    res.send({
        name:"apple",
        color: "red"
    });
});

app.get("/banana", (req,res) => {
    res.send({
        name:"banana",
        color: "yellow"
    });
});

app.get("*", (req,res) => {
    res.send(" <h1>Your path are not exit 403 :( </h1>")
});

app.post("/", (req,res) => {
    res.send("this is post res");
})

*/


// essse pta hota hain responce mil raha 

// app.use((req, res) => {
//     console.log("request recieve");
//     res.send({

//         name:"apple",
//         color:"red"
//     })
//     // res.send("<h1>Hii , welcome to my first express</h1> <ul><li>Home</li><li>about</li></ul>");
// });


// path parameter 

app.get("/", (req,res) => {
    res.send("this is root path ")
});

app.get("/:username/:id" , (req,res) => {
    // console.log(req.params);
    let {username , id } = req.params;
    res.send(`this account belong to @ ${username}`);
});


// Query string 

app.get("/search", (req,res) => {
    // console.log(req.query);
    let {q} = req.query;
if(!q){
    res.send("No result found");
}
    res.send(`these are the result for : ${q}`);
})
