const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Itinerary_model = require("../../models/itinerary");
const { singlebid } = require("./merge");



module.exports = {

    createItinerary: async (args,req) => {
        try{
        const itinerary = new Itinerary_model({
            days:args.itineraryInput.days,
            bidId:args.itineraryInput.bidId,
            title:args.itineraryInput.title,
            activity:args.itineraryInput.activity,
            hotelname:args.itineraryInput.hotelname,
            
        });

        const itineraryResult = await itinerary.save();
        return{
            ...itineraryResult._doc,
            _id: itineraryResult.id,

        }
    }catch(err){
        throw err;
    }


    },
    itineraryDisplay: async (args, req) => {
        try {
          const itinerary = await Itinerary_model.findOne({
            $or: [{ _id: args.itineraryId }, { _id: req.bidId }],
          });
          return {
            ...itinerary._doc,
            _id: itinerary.id,
            bidId: singlebid.bind(this, itinerary.bidId),
          };
        } catch (err) {
          console.log(err);
        }


      },
};