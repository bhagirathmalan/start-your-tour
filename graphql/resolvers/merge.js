const Category = require("../../models/category");
const Admin = require("../../models/admin");
const User = require('../../models/user')
const Custompackage = require("../../models/custompackage");
const Agencydetail = require("../../models/agencydetail");
const Agencygstdetail = require("../../models/agencygstdetail");


const admin = async (adminId) => {
    try {
      const admin = await Admin.findById(adminId);
      if (!admin) {
        throw new Error("User not exist!");
      }
      return { ...admin._doc, _id: admin.id, password: null };
    } catch (err) {
      throw err;
    }
  };

const category = async (categoryId) => {
    try {
      const category = await Category.findById(categoryId);
      return { ...category._doc, _id: category.id };
    } catch (err) {
      throw err;
    }
  };
  const mergeAgencydetail =  agencydetail => {
    return {
        ...agencydetail._doc,
        _id: agencydetail.id,
        agencyid: agency.bind(this, agencydetail._id.agencydetail),
        
    };

};
const singleAgency = async agency_id => {
  try {
      const agency = await Agency_model.findById(agency_id);
      return {
          ...agency._doc,
          _id: agency.id,
          agency: agency.bind(this, agency.agency)
      };

  } catch (err) {
      throw err;
  }
};

const mergeAgencygstdetail = agencygstdetail => {
  return {
      ...agencygstdetail._doc,
      _id: agencygstdetail.id,
      agency: singleAgency.bind(this, agencygstdetail._doc.agency)
      
};
}
    
const transformCustompackage =  custompackage => {
  return {
      ...custompackage._doc,
      _id: custompackage.id,
      userId: user.bind(this, custompackage.userId)
  };

};
  


  exports.mergeAgencygstdetail = mergeAgencygstdetail;
  exports.category = category;
  exports.mergeAgencydetail = mergeAgencydetail;
  exports.admin = admin;
  exports.transformCustompackage = transformCustompackage;