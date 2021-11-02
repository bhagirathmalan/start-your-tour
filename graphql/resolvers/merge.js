const Category = require("../../models/category");
const Admin = require("../../models/admin");
const User = require('../../models/user')
const Custompackage = require("../../models/custompackage");

const Agency_model = require("../../models/agency");
const Bid_model = require("../../models/bid");


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
 


    
const transformCustompackage =  custompackage => {
  return {
      ...custompackage._doc,
      _id: custompackage.id,
      userId: user.bind(this, custompackage.userId)
  };

};
const singlebid = async (bidId) => {
  try {
    const bid = await Bid_model.findById(bidId);
    return { ...bid._doc, _id: bid.id };
  } catch (err) {
    throw err;
  }
};
  


  
  exports.category = category;
  exports.singlebid = singlebid;
  
  exports.admin = admin;
  exports.transformCustompackage = transformCustompackage;