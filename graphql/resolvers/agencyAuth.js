const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Custompackage_model = require("../../models/custompackage");
const { dateToString } = require("../../helpers/date");
const User_model = require('../../models/user');
const { transformCustompackage } = require("./merge");
const custompackage = require("../../models/custompackage");
const Agency_model = require("../../models/agency");
const Agencydetail_model = require("../../models/agencydetail");
const Agencygstdetail_model = require("../../models/agencygstdetail")
const  { mergeAgencydetail } = require("./merge");
const { mergeAgencygstdetail } = require("./merge");

module.exports = {

        createAgency: async (args) => {
            try{
            const agency = new Agency_model({
                firstName:args.agencyInput.firstname,
                lastName:args.agencyInput.lastName,
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
        createAgencydetail:  async (args,req) => {
                 
                const agencydetail = new Agencydetail_model({
                    agency: req.agency_id,
                    agencyname:args.agencydetailInput.agencyname,
                    pan:args.agencydetailInput.pan,
                    attatchpancopy:args.agencydetailInput.attatchpancopy,
                    phone:args.agencydetailInput.phone,
                    address:args.agencydetailInput.address,
                    address2:args.agencydetailInput.address2,
                    fax:args.agencydetailInput.fax,
                    pincode:args.agencydetailInput.pincode,
                    country:args.agencydetailInput.country,
                    city:args.agencydetailInput.city,
                    bussinesstype:args.agencydetailInput.bussinesstype,
                    officespace:args.agencydetailInput.officespace,
                    iataregisterd:args.agencydetailInput.iataregisterd,
                    securitizationmode:args.agencydetailInput.securitizationmode,
                    yearsinbusiness:args.agencydetailInput.yearsinbusiness,
                    montlybookingvolume:args.agencydetailInput.montlybookingvolume,
                    tdsexemption:args.agencydetailInput.tdsexemption,
                    tdspersentforexemption:args.agencydetailInput.tdspersentforexemption,
                    references:args.agencydetailInput.references,
                    consolidators:args.agencydetailInput.consolidators,
                    remarks:args.agencydetailInput.remarks,
                });
                let agencyed;
                try{
                    const result = await agencydetail.save();
                    agencyed = mergeAgencydetail(result);
                    const agency = await Agency_model.findById(req.agency_id);

                    agency.agencyed.push(agencydetail);
                    await agency.save();
                    return agencyed;
                }catch(err){
                throw err
            }
            
        },
        createAgencygstdetail:  async (args,req) => {

            const fetchedgstdetail = await Agency_model.findOne({ _id: args._id });
                const agencygstdetail =  new Agencygstdetail_model({
                    agency: fetchedgstdetail,
                    agencyname:args.agencygstdetailInput.agencyname,
                    agencyclasification:args.agencygstdetailInput.agencyclasification,
                    agencygstin:args.agencygstdetailInput.agencygstin,
                    state:args.agencygstdetailInput.state,
                    statecode:args.agencygstdetailInput.statecode,
                    provisionalgstno:args.agencygstdetailInput.provisionalgstno,
                    contactperson:args.agencygstdetailInput.contactperson,
                    phone:args.agencygstdetailInput.phone,
                    mobile:args.agencygstdetailInput.mobile,
                    email:args.agencygstdetailInput.email,
                    correspondenceemail:args.agencygstdetailInput.correspondenceemail,
                    gstregistrationstatus:args.agencygstdetailInput.gstregistrationstatus,
                    hsncode:args.agencygstdetailInput.hsncode,
                    compositionlevy:args.agencygstdetailInput.compositionlevy,
                    address:args.agencygstdetailInput.address,
                    address2:args.agencygstdetailInput.address2,
                    pincode:args.agencygstdetailInput.pincode,
                    agencycity:args.agencygstdetailInput.agencycity,
                    supplytype:args.agencygstdetailInput.supplytype,
                    });
                    try{
                        const result = await agencygstdetail.save();
                        
                        return mergeAgencygstdetail(result);

                    }catch(err){
                        throw err;
                    }
        },


};