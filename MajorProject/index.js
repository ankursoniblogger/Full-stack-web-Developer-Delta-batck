const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");


// routes 
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

// mongoose
main().then( () => {console.log("connected To DB")}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname , "public")));



app.use("/listings" , listings);
app.use("/listings/:id/reviews" , reviews )





 
app.get("/" , (req,res) => {
    res.send("I am root ")
});


// all route express error
app.all( "*" , (req,res,next) => {
    next( new ExpressError(404 , "Page not found"))
})

// error handling 
app.use( (err , req ,res, next) => {
    let {statusCode = 500 , message = "Somethings went wrong"} = err ;
    res.status(statusCode).render("listings/error.ejs" , {message})
    // res.status(statusCode).send(message);
})


app.listen(3000, () => {
    console.log("Server is on port 3000")
});