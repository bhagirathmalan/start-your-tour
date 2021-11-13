const { dateToString } = require("../../helpers/date");
const Bid_model = require("../../models/bid");
const { singleitineraryid } = require("./merge");
const { mergeItinerary } = require("./merge");
const Itinerary_model= require("../../models/itinerary");

module.exports = {

  createBid: async (args) => {
      try {
        const bid = new Bid_model({
  
          agencyId: args.bidInput.agencyId,
          custompackageId:args.bidInput.custompackageId,
          itineraryId:args.bidInput.itineraryId,
          departurelocation: args.bidInput.departurelocation,
          destinationlocation: args.bidInput.destinationlocation,
          category: args.bidInput.category,
          adult: args.bidInput.adult,
          child: args.bidInput.child,
          infont: args.bidInput.infont,
          personalcare: "no",
          travelby: args.bidInput.travelby,
          departurebetween: args.bidInput.departurebetween,
          hoteltype: args.bidInput.hoteltype,
          meals: args.bidInput.meals,
          mealtype: args.bidInput.mealtype,
          additionalrequirements: args.bidInput.additionalrequirements,
          name: args.bidInput.name,
          email: args.bidInput.email,
          phone: args.bidInput.phone,
          city: args.bidInput.city,
          cotation: args.bidInput.cotation,
          totaldays: args.bidInput.totaldays,
          bid_status: args.bidInput.bid_status,
          include_services: args.bidInput.include_services,
          exclude_services: args.bidInput.exclude_services,
          
  
        });
        const result = await bid.save();
        return {
          ...result._doc,
          _id:result.id,
          
        };
  
      } catch (err) {
       throw err;
      }
  
    },
    updateBid: async (args, req) => {
          
      try {
        const result = await Bid_model.findOneAndUpdate(
          { _id: args._id },
          { 
            departurelocation: args.updateBid.departurelocation,
            destinationlocation: args.updateBid.destinationlocation,
            category: args.updateBid.category,
            adult: args.updateBid.adult,
            child: args.updateBid.child,
            infont: args.updateBid.infont,
            personalcare: "no",
            travelby: args.updateBid.travelby,
            departurebetween: args.updateBid.departurebetween,
            hoteltype: args.updateBid.hoteltype,
            meals: args.updateBid.meals,
            mealtype: args.updateBid.mealtype,
            additionalrequirements: args.updateBid.additionalrequirements,
            name: args.updateBid.name,
            email: args.updateBid.email,
            phone: args.updateBid.phone,
            city: args.updateBid.city,
            cotation: args.updateBid.cotation,
            totaldays: args.updateBid.totaldays,
            include_services: args.updateBid.include_services,
            exclude_services: args.updateBid.exclude_services,
            
            
           
          
          },
          {
            omitUndefined: true,
            new: true,
          }
        );
        return{
          ...result._doc,
          _id:result.id
        };
  
          }catch(err){
            throw err;
          };
        },
        bidDisplay: async (args, req) => {
          try {
            const bid = await Bid_model.findById({ _id: args.bidId});
            
            return {
              ...bid._doc,
              _id: bid.id,
              itineraryId: singleitineraryid.bind(this, bid._doc.itineraryId),
            };
          } catch (err) {
            console.log(err);
          };
    
    
        },
      
};