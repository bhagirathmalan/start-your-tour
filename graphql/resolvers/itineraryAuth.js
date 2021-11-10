const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Itinerary_model = require("../../models/itinerary");
const { singlebid } = require("./merge");
const Bid_model = require("../../models/bid");
const { mergeItinerary } = require("./merge");



module.exports = {

    createItinerary: async (args,req) => {
        try{
        const fetchedbid = await Bid_model.findOne({ _id: args.bidId });
        const itinerary = new Itinerary_model({
            days:args.itineraryInput.days,
            bidId:fetchedbid,
            title:args.itineraryInput.title,
            activity:args.itineraryInput.activity,
            hotelname:args.itineraryInput.hotelname,
            
        });

        const result = await itinerary.save();
        return mergeItinerary(result);
    }catch(err){
        throw err;
    }


    },
    itineraryDisplay: async (args, req) => {
      try {
        const itinerary = await Itinerary_model.findOne({ _id: args.itineraryId});
        
        return {
          ...itinerary._doc,
          _id: itinerary.id,
          bidId: singlebid.bind(this, itinerary.bidId),
        };
      } catch (err) {
        console.log(err);
      }


    },
    itinerarys: async () => {
      try {
        const itinerarys = await Itinerary_model.find();
        return itinerarys.map((itinerary) => {
          return {
            ...itinerary._doc,
            _id:itinerary.id,
           
          };
        });
      } catch (err) {
        console.log(err);
      };
    },
};