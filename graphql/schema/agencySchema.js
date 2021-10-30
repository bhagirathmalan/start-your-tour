const agencyType = `
type Agency{
  _id: ID!
  firstname: String
  lastname:String!
  phone: String!
  email: String!
  residentialaddress:String
  residentialaddress2: String
  mobilenumber:String
  pincode:String
  skypeid:String
  country:String
  state:String
  city: String
  agencyname:String!
  pan : String!
    attatchpancopy:String
    agencyphone:String!
    agencyaddress:String
    agencyaddress2:String
    fax:String
    agencypincode:String
    agencycountry:String!
    agencycity:String
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
    agencynamesecondtime:String!
    agencyclasification:String!
    agencygstin:String!
    agencystate:String!
    agencystatecode:String!
    provisionalgstno:String!
    contactperson:String!
    phone2:String!
    mobile:String!
    agencyemail:String!
    correspondenceemail:String
    gstregistrationstatus:String!
    hsncode:String!
    compositionlevy:String
    gstaddress:String!
    gstaddress2:String
  supplytype:String
  createdAt: String!
  updatedAt: String!
}

type AgencyAuthData{
  userId: ID!
  token: String!
  userType: String!
  tokenExpiration:Int!
}

input UpdateAgency{
  firstname: String
  lastname:String
  phone: String
  email: String
  residentialaddress:String
  residentialaddress2:String
  mobilenumber:String
  pincode:String
  skypeid:String
  country:String
  state:String
  city: String
  agencyname:String
  pan : String
    attatchpancopy:String
    agencyphone:String
    agencyaddress:String
    agencyaddress2:String
    fax:String
    agencypincode:String
    agencycountry:String
    agencycity:String
    bussinesstype: String
    officespace:String
    iataregisterd:String
    securitizationmode:String
    yearsinbusiness:String
    montlybookingvolume:String
    tdsexemption:String
    tdspersentforexemption:String
    references:String
    consolidators:String
    remarks:String
    agencynamesecondtime:String
    agencyclasification:String
    agencygstin:String
    agencystate:String
    agencystatecode:String
    provisionalgstno:String
    contactperson:String
    phone2:String
    mobile:String
    agencyemail:String
    correspondenceemail:String
    gstregistrationstatus:String
    hsncode:String
    compositionlevy:String
    gstaddress:String
    gstaddress2:String
  supplytype:String

}


input AgencyInput {
  firstname: String
  lastname:String
  phone: String
  email: String
  residentialaddress:String
  residentialaddress2: String
  mobilenumber:String
  pincode:String
  skypeid:String
  country:String
  state:String
  city: String
  agencyname:String!
    pan : String!
    attatchpancopy:String
    agencyphone:String!
    agencyaddress:String
    agencyaddress2:String
    fax:String
    agencypincode:String
    agencycountry:String!
    agencycity:String
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
    agencynamesecondtime:String!
    agencyclasification:String!
    agencygstin:String!
    agencystate:String!
    agencystatecode:String!
    provisionalgstno:String!
    contactperson:String!
    phone2:String!
    mobile:String!
    agencyemail:String!
    correspondenceemail:String
    gstregistrationstatus:String!
    hsncode:String!
    compositionlevy:String
    gstaddress:String!
    gstaddress2:String
  
    supplytype:String
    
  }



`;

exports.agencyType = agencyType;