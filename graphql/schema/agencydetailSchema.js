const agencydetailType = `
type Agencydetail{
    _id: ID!
    agencyid:Agency!
    agencyname:String!
    pan : String!
    attatchpancopy:String
    phone:String!
    address:String
    address2:String
    fax:String
    pincode:String
    country:String!
    city:String
    bussinesstype: String!
    officespace:String!
    iataregisterd:String!
    securitizationmode:String!
    yearsinbusiness:String!
    montlybookingvolume:String
    tdsexemption:String
    tdspersentforexemption:String
    references:String
    consolidators:String
    remarks:String
    }
input AgencydetailInput {
    agencyname:String!
    pan : String!
    attatchpancopy:String
    phone:String!
    agencyaddress:String
    address2:String
    fax:String
    pincode:String
    country:String!
    city:String
    bussinesstype: String!
    officespace:String!
    iataregisterd:String!
    securitizationmode:String!
    yearsinbusiness:String!
    montlybookingvolume:String
    tdsexemption:String
    tdspersentforexemption:String
    references:String
    consolidators:String
    remarks:String


}
`;

exports.agencydetailType = agencydetailType;