const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agencygstdetailSchema = new Schema(
    {
        agency: {
            type: Schema.Types.ObjectId,
            ref: "Agency",
          },
        agencyname: {
            type: String,
            required: true,
        },
        agencyclasification: {
            type: String,
            required: true,
        },
        agencygstin: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        statecode: {
            type: String,
            required: true,
        },
        provisionalgstno: {
            type: String,
            required: true,
        },
        contactperson: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        correspondenceemail: {
            type: String,
            required: true,
        },
        gstregistrationstatus: {
            type: String,
            required: true,
        },
        hsncode: {
            type: String,
            required: true,
        },
        compositionlevy: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            
        },
        address2: {
            type: String,
           
        },
        pincode: {
            type: String,
            required: true,
        },
        agencycity: {
            type: String,
            required: true,
        },
        supplytype: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
    );
module.exports = mongoose.model("Agencygstdetail", agencygstdetailSchema);