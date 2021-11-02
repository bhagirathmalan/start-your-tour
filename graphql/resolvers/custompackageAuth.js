const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Custompackage_model = require("../../models/custompackage");
const { dateToString } = require("../../helpers/date");
const User = require('../../models/user');
const { transformCustompackage } = require("./merge");
const custompackage = require("../../models/custompackage");
// const { category } = require("./merge");

async function tokengenerator() {
  var token = [];
  for (let i = 0; i < 10; i++) {
    token.push(i);
  }
  var m = token.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = token[m];
    token[m] = token[i];
    token[i] = t;
  }

  console.log(token.join(""), typeof token.join(""));
  const tokenNumber = await parseInt(token.join(""), 10);
  console.log(typeof tokenNumber, tokenNumber);
  return tokenNumber;
}


module.exports = {

  createCustompackage: async (args) => {
    try {
      console.log("bdsdkh");



        const custompackage = new Custompackage_model({

        userId: args.custompackageInput.userId,
        bidId: args.custompackageInput.bidId,
        departurelocation: args.custompackageInput.departurelocation,
        destinationlocation: args.custompackageInput.destinationlocation,
        category: args.custompackageInput.category,
        adult: args.custompackageInput.adult,
        child: args.custompackageInput.child,
        infont: args.custompackageInput.infont,
        personalcare: "no",
        travelby: args.custompackageInput.travelby,
        departurebetween: args.custompackageInput.departurebetween,
        hoteltype: args.custompackageInput.hoteltype,
        meals: args.custompackageInput.meals,
        mealtype: args.custompackageInput.mealtype,
        additionalrequirements: args.custompackageInput.additionalrequirements,
        name: args.custompackageInput.name,
        email: args.custompackageInput.email,
        phone: args.custompackageInput.phone,
        city: args.custompackageInput.city,
        budget: args.custompackageInput.budget,
        custompackage_status: args.custompackageInput.custompackage_status,

      });
      const custompackageResult = await custompackage.save();
      return {
        ...custompackageResult._doc,
        _id: custompackageResult.id,
        createdAt: dateToString(custompackageResult._doc.createdAt),
        updatedAt: dateToString(custompackageResult._doc.updatedAt),
      };

    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong , Please try again later!");
    }

  },

  // display custome packages for user and agrecy
  // for agency user id must be null
  // for user user id is required 

  custompackage_display: async (args,req) => {
    

    if (args._id == "") {

      try {
        const custompackages = await Custompackage_model.find();
        return custompackages.map((custompackage) => {

          return {
            ...custompackage._doc,
          };

        });
      } catch (err) {
        console.log(err);
      }

    }
    else {


      try {
        const custompackages = await Custompackage_model.find({  id: args._id  });
        return custompackages.map((custompackage) => {

          return {
            ...custompackage._doc,

          };
        });
      } catch (err) {
        console.log(err);
      }
    }
  },

  hide_custompackage: async (args, req) => {

    try {
      const result = await Custompackage_model.findByIdAndUpdate(
        { uid: args.userId , _id: args._id },
        {
          custompackage_status: "deactive",
        },
        {
          omitUndefined: true,
          new: true,
        }
      );

      return "deactivate";
    } catch (err) {
      throw err;
    }
  }
};

