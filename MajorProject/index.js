const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
// try catch ko hatane ke liye use kiya 
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema");

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




// testing route 
// app.get("/testListing" , async (req,res) => {
//     let sampleListing = new Listing({
//         title: "My new vella",
//         description: "On the beach",
//         price: 1000,
//         location: "gov",
//         country: "India",
//     });
//    await sampleListing.save();
//    console.log("sample was send");
//    res.send("successfull testing")
// })



// validation shema for middlewears

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map( (el) => el.message).join(",");
       throw new ExpressError(404, errMsg)
    } else{
        next()
    }
}


// Index route 
app.get("/listings" , wrapAsync(async (req,res) => {
   const allListing = await Listing.find({});
   res.render("listings/index.ejs" , {allListing})
})) ;

// Create route 

app.get("/listings/new" , (req, res) => {
    res.render("listings/new.ejs")
})



// Show route 

app.get("/listings/:id" , wrapAsync(async (req,res) => {

    let {id} = req.params;
   const listing = await Listing.findById(id);
   res.render("listings/show.ejs" , {listing});
}));


// create route 

app.post("/listings" , validateListing, wrapAsync(async (req,res, next) => {
    // let {title,description, img, price, location , country } = req.body;
    // if(!req.body.listing){
    //     throw new ExpressError(400 , "Send valid data for listing")
    // }
      let newListing = new Listing(req.body.listing);
      await newListing.save();
      res.redirect("/listings")
}) );


// edit route
app.get("/listings/:id/edit" , wrapAsync(async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs" , {listing})
}) );

// update route 

app.put("/listings/:id" , validateListing, wrapAsync( async (req,res) => {
    let {id} = req.params;
   await Listing.findByIdAndUpdate (id , {...req.body.listing});
   res.redirect(`/listings/${id}`)
}));



// delete route 

app.delete("/listings/:id" , wrapAsync( async (req,res) => {
    let {id} = req.params;
   const deleteListing = await  Listing.findByIdAndDelete(id);
//    console.log(deleteListing);
   res.redirect("/listings")
}))

 
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