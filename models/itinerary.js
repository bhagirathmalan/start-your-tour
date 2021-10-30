const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itinerarySchema = new Schema(
    {
        days:{
            type: String,
            require: true,
        },
        bidId:{
            type: String,
            require: true,
        },
        title:{
            type: String,
            require: true,
        },
        activity:{
            type: String,
            require: true,
            
        },
        hotelname:{
            type: String,
            require: true,
            
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Itinerary", itinerarySchema);