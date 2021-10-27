const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const custompackageSchema = new Schema(
    {   
        userId: {
          type: String,
          required: true,
        },
        departurelocation: {
            type: String,
            required: true,
          },
          destinationlocation: {
            type: String,
            required: true,
          },
          category: {
            type: String,
            required: true,
          },
          adult: {
            type: String,
            required: true,
          },
          child: {
            type: String,
            required: true,
          },
          infont: {
            type: String,
            required: true,
          },
          personalcare: {
            type: Boolean,
            required: true,
            default: false,
          },
          travelby: {
            type: String,
            required: true,
          },
          departurebetween: {
            type: String,
            required: true,
          },
          hoteltype: {
            type: String,
            required: true,
          },
          meals: {
            type: String,
            required: true,
          },
          mealtype: {
            type: String,
            required: true,
          },
          additionalrequirements: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
          phone: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          budget: {
            type: String,
            required: true,
          },
          custompackage_status: {
            type: String,
            enum: {
              values: ["active", "deactive", "expired"],
            },
            default: "active",
          },

    },
    { timestamps: true }


);
module.exports = mongoose.model("Custompackage", custompackageSchema);