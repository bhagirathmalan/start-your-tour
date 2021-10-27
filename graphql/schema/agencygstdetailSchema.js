const agencygstdetailType = `
type Agencygstdetail{
    _id: ID!
    agency:Agency!
    agencyname:String!
    agencyclasification:String!
    agencygstin:String!
    state:String!
    statecode:String!
    provisionalgstno:String!
    contactperson:String!
    phone:String!
    mobile:String!
    email:String!
    correspondenceemail:String
    gstregistrationstatus:String!
    hsncode:String!
    compositionlevy:String
    address:String!
    address2:String
    pincode:String!
    agencycity:String!
    supplytype:String
}


input AgencygstdetailInput {
    agencyname:String!
    agencyclasification:String!
    agencygstin:String!
    state:String!
    statecode:String!
    provisionalgstno:String!
    contactperson:String!
    phone:String!
    mobile:String!
    email:String!
    correspondenceemail:String
    gstregistrationstatus:String!
    hsncode:String!
    compositionlevy:String
    address:String!
    address2:String
    pincode:String!
    agencycity:String!
    supplytype:String


}
`;
exports.agencygstdetailType = agencygstdetailType;