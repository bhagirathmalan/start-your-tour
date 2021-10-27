const agencyType = `
type Agency{
  _id: ID!
  firstName: String
  lastName:String!
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
  agencyd:[Agencydetail!]
  agencyg:[Agencygstdetail!]
  createdAt: String!
  updatedAt: String!
}

type AgencyAuthData{
  userId: ID!
  token: String!
  userType: String!
  tokenExpiration:Int!
}

input AgencyInput {
  firstName: String
  lastName:String
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
    
  
 
  
}



`;

exports.agencyType = agencyType;