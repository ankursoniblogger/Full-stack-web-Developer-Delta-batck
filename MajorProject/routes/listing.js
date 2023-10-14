const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema } = require("../schema");
const Listing = require("../models/listing");





// validation shema for middlewears client side

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map( (el) => el.message).join(",");
       throw new ExpressError(404, errMsg)
    } else{
        next()
    }
};



// Index route 
router.get("/" , wrapAsync(async (req,res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs" , {allListing})
 })) ;
 
 // Create route 
 
 router.get("/new" , (req, res) => {
     res.render("listings/new.ejs")
 })
 
 
 
 // Show route 
 
 router.get("/:id" , wrapAsync(async (req,res) => {
 
     let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs" , {listing});
 }));
 
 
 // create route 
 
 router.post("/" , validateListing, wrapAsync(async (req,res, next) => {
     // let {title,description, img, price, location , country } = req.body;
     // if(!req.body.listing){
     //     throw new ExpressError(400 , "Send valid data for listing")
     // }
       let newListing = new Listing(req.body.listing);
       await newListing.save();
       res.redirect("/listings")
 }) );
 
 
 // edit route
 router.get("/:id/edit" , wrapAsync(async (req,res) => {
     let {id} = req.params;
     const listing = await Listing.findById(id);
     res.render("listings/edit.ejs" , {listing})
 }) );
 
 // update route 
 
 router.put("/:id" , validateListing, wrapAsync( async (req,res) => {
     let {id} = req.params;
    await Listing.findByIdAndUpdate (id , {...req.body.listing});
    res.redirect(`/listings/${id}`)
 }));
 
 
 
 // delete route 
 
 router.delete("/:id" , wrapAsync( async (req,res) => {
     let {id} = req.params;
    const deleteListing = await  Listing.findByIdAndDelete(id);
 //    console.log(deleteListing);
    res.redirect("/listings")
 }))
 


module.exports = router; 