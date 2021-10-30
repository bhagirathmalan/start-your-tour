const { dateToString } = require("../../helpers/date");
const Bid_model = require("../../models/bid");

module.exports = {

  createBid: async (args) => {
      try {
        const bid = new Bid_model({
  
          agencyId: args.bidInput.agencyId,
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
};