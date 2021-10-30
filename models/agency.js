const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agencySchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
            
        },
        lastname: {
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
        agencyphone: {
            type: String,
            required: true,
        },
        agencyaddress: {
            type: String,
            
        },
        agencyaddress2: {
            type: String,
            
        },
    
        fax: {
            type: String,
            required: true,
        },
    
        agencypincode: {
            type: String,
            required: true,
        },
    
        agencycountry: {
            type: String,
            required: true,
        },
    
        agencycity: {
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
       
        agencynamesecondtime: {
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
        agencystate: {
            type: String,
            required: true,
        },
        agencystatecode: {
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
        phone2: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        agencyemail: {
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
        gstaddress: {
            type: String,
            
        },
        gstaddress2: {
            type: String,
           
        },
        
        
        supplytype: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Agency", agencySchema);