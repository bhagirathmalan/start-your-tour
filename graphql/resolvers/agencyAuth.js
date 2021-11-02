const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Custompackage_model = require("../../models/custompackage");
const { dateToString } = require("../../helpers/date");
const User_model = require('../../models/user');
const { transformCustompackage } = require("./merge");
const custompackage = require("../../models/custompackage");
const Agency_model = require("../../models/agency");



module.exports = {
    agencys: async (args, req) => {
        try {
         const agencys = await Agency_model.find();
          return agencys.map((agency) => {
            return {
              ...agency._doc,
              _id: agency.id,
              
            };
          });
        } catch (err) {
          console.log(err);
        }
      },

        createAgency: async (args) => {
            try{
            const agency = new Agency_model({
                bidId:args.agencyInput.bidId,
                firstname:args.agencyInput.firstname,
                lastname:args.agencyInput.lastname,
                phone:args.agencyInput.phone,
                email:args.agencyInput.email,
                residentialaddress:args.agencyInput.residentialaddress,
                residentialaddress2:args.agencyInput.residentialaddress2,
                mobilenumber:args.agencyInput.mobilenumber,
                pincode:args.agencyInput.pincode,
                skypeid:args.agencyInput.skypeid,
                country:args.agencyInput.country,
                state:args.agencyInput.state,
                city:args.agencyInput.city,
                agencyname:args.agencyInput.agencyname,
                pan:args.agencyInput.pan,
                attatchpancopy:args.agencyInput.attatchpancopy,
                agencyphone:args.agencyInput.agencyphone,
                agencyaddress:args.agencyInput.agencyaddress,
                agencyaddress2:args.agencyInput.agencyaddress2,
                fax:args.agencyInput.fax,
                agencypincode:args.agencyInput.agencypincode,
                agencycountry:args.agencyInput.agencycountry,
                agencycity:args.agencyInput.agencycity,
                bussinesstype:args.agencyInput.bussinesstype,
                officespace:args.agencyInput.officespace,
                iataregisterd:args.agencyInput.iataregisterd,
                securitizationmode:args.agencyInput.securitizationmode,
                yearsinbusiness:args.agencyInput.yearsinbusiness,
                montlybookingvolume:args.agencyInput.montlybookingvolume,
                tdsexemption:args.agencyInput.tdsexemption,
                tdspersentforexemption:args.agencyInput.tdspersentforexemption,
                references:args.agencyInput.references,
                consolidators:args.agencyInput.consolidators,
                remarks:args.agencyInput.remarks,
                agencynamesecondtime:args.agencyInput.agencynamesecondtime,
                agencyclasification:args.agencyInput.agencyclasification,
                agencygstin:args.agencyInput.agencygstin,
                agencystate:args.agencyInput.agencystate,
                agencystatecode:args.agencyInput.agencystatecode,
                provisionalgstno:args.agencyInput.provisionalgstno,
                contactperson:args.agencyInput.contactperson,
                phone2:args.agencyInput.phone2,
                mobile:args.agencyInput.mobile,
                agencyemail:args.agencyInput.agencyemail,
                correspondenceemail:args.agencyInput.correspondenceemail,
                gstregistrationstatus:args.agencyInput.gstregistrationstatus,
                hsncode:args.agencyInput.hsncode,
                compositionlevy:args.agencyInput.compositionlevy,
                gstaddress:args.agencyInput.gstaddress,
                gstaddress2:args.agencyInput.gstaddress2,
               
                
                supplytype:args.agencyInput.supplytype,
                })
                const result = await agency.save();
                return{
                    ...result._doc,
                    _id:result.id,
                }
            }catch(err){
                throw err;
            };

        },
        updateAgencyProfile: async (args, req) => {
          
    try {
      const result = await Agency_model.findOneAndUpdate(
        { _id: args._id },
        { 
          
          firstname:args.updateAgency.firstname,
          lastname:args.updateAgency.lastname,
          phone:args.updateAgency.phone,
          email:args.updateAgency.email,
          residentialaddress:args.updateAgency.residentialaddress,
          residentialaddress2:args.updateAgency.residentialaddress2,
          mobilenumber:args.updateAgency.mobilenumber,
          pincode:args.updateAgency.pincode,
          skypeid:args.updateAgency.skypeid,
          country:args.updateAgency.country,
          state:args.updateAgency.state,
          city:args.updateAgency.city,
          agencyname:args.updateAgency.agencyname,
          pan:args.updateAgency.pan,
          attatchpancopy:args.updateAgency.attatchpancopy,
          agencyphone:args.updateAgency.agencyphone,
          agencyaddress:args.updateAgency.agencyaddress,
          agencyaddress2:args.updateAgency.agencyaddress2,
          fax:args.updateAgency.fax,
          agencypincode:args.updateAgency.agencypincode,
          agencycountry:args.updateAgency.agencycountry,
          agencycity:args.updateAgency.agencycity,
          bussinesstype:args.updateAgency.bussinesstype,
          officespace:args.updateAgency.officespace,
          iataregisterd:args.updateAgency.iataregisterd,
          securitizationmode:args.updateAgency.securitizationmode,
          yearsinbusiness:args.updateAgency.yearsinbusiness,
          montlybookingvolume:args.updateAgency.montlybookingvolume,
          tdsexemption:args.updateAgency.tdsexemption,
          tdspersentforexemption:args.updateAgency.tdspersentforexemption,
          references:args.updateAgency.references,
          consolidators:args.updateAgency.consolidators,
          remarks:args.updateAgency.remarks,
          agencynamesecondtime:args.updateAgency.agencynamesecondtime,
          agencyclasification:args.updateAgency.agencyclasification,
          agencygstin:args.updateAgency.agencygstin,
          agencystate:args.updateAgency.agencystate,
          agencystatecode:args.updateAgency.agencystatecode,
          provisionalgstno:args.updateAgency.provisionalgstno,
          contactperson:args.updateAgency.contactperson,
          phone2:args.updateAgency.phone2,
          mobile:args.updateAgency.mobile,
          agencyemail:args.updateAgency.agencyemail,
          correspondenceemail:args.updateAgency.correspondenceemail,
          gstregistrationstatus:args.updateAgency.gstregistrationstatus,
          hsncode:args.updateAgency.hsncode,
          compositionlevy:args.updateAgency.compositionlevy,
          gstaddress:args.updateAgency.gstaddress,
          gstaddress2:args.updateAgency.gstaddress2,
        
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

};