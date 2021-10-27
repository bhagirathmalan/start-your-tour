const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agencySchema = new Schema(
    {
        firstName: {
            type: String,
            
        },
        lastName: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            require: true,
        },
        residentialaddress : {
            type: String,
            require: true,
        },
        residentialaddress2 : {
            type: String,
            
        },
        mobilenumber : {
            type: String,
            
        },
        pincode: {
            type: String,
            required: true,
        },
        skypeid: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        agencyd: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Agencydetail'
            }
        ],
        agencyg: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Agencygstdetail'
            }
        ]
    },
    { timestamps: true }
);
module.exports = mongoose.model("Agency", agencySchema);