const mongoose = require("mongoose");
const Review = require("./review");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:{
        type: String,
        default: "https://images.unsplash.com/photo-1682686581776-b6ebee7c150e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1682686581776-b6ebee7c150e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80": v ,
    },
    price: Number,
    location: String,
    country: String,
    reviews:[ 
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: Review,
        }
           ]
});


// delete listing middlewers 

listingSchema.post("findOneAndDelete" , async (listing) => {
    if(listing) {
        await Review.deleteMany( {_id: {$in: listing.reviews}})
    }
});



const Listing = mongoose.model("Listing" , listingSchema);

module.exports = Listing;