const express = require("express");
const app = express();
const port = 3000;

// uuid create 
const { v4: uuidv4 } = require('uuid');

// method override post request direct patch request mein aa jayega 
const methodOverride = require('method-override');
app.use(methodOverride('_method'));




const path = require("path");
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "views"));



app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded ({extended: true})); 

app.listen(port, () => {
    console.log(`server in on. ${port}`);
});

// upper part is basic template 

// app.get("/", (req,res) => {
//   res.send("server is onloine ")
// });

let posts = [

    {
        id: uuidv4(),
        username: "ankur",
        content: "Hard working is key to success"
    },
    {
        id:uuidv4(),
        username: "apnacollege",
        content: "I love coding"
    },   {
        id:uuidv4(),
        username: "ankit ",
        content: "He is a profesnal web developers"
    },
];

app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts})
});


// Implement POST /Posts  (form path ) create new post

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts" , (req,res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({ id, username, content});
    // res.send("Post request is successfully ")
    res.redirect("/posts");
});


// Implement Get/posts/id /

app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id );
    res.render("show.ejs" , {post})
});

// Patch implement update a post

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id );
    post.content = newContent;
    console.log(post);
    // res.send("working patch")
     res.redirect("/posts");
})


// update a edit option create 

app.get("/posts/:id/edit" , (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs" , {post})


})


// delete post 

app.delete("/posts/:id" , (req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id );
    // res.send("delete successfully");
    res.redirect("/posts");
})