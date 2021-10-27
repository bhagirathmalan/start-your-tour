const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agencydetailSchema = new Schema(
    {
        
    agency: {
        type: Schema.Types.ObjectId,
        ref: "Agency",
      },
    agencyname: {
        type: String,
        required: true,
    },
    pan: {
        type: String,
        required: true,
    },
    attatchpancopy: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        
    },
    address2: {
        type: String,
        
    },

    fax: {
        type: String,
        required: true,
    },

    pincode: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    bussinesstype: {
        type: String,
        required: true,
    },

    officespace: {
        type: String,
        required: true,
    },

    iataregisterd: {
        type: String,
        required: true,
    },

    securitizationmode: {
        type: String,
        required: true,
    },

    yearsinbusiness: {
        type: String,
        required: true,
    },

    montlybookingvolume: {
        type: String,
        required: true,
    },

    tdsexemption: {
        type: String,
        required: true,
    },

    tdspersentforexemption: {
        type: String,
        required: true,
    },

    references: {
        type: String,
        required: true,
    },

    consolidators: {
        type: String,
        required: true,
    },
    remarks: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
    );
    module.exports = mongoose.model("Agencydetail", agencydetailSchema);