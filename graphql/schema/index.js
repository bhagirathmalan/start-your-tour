const { buildSchema } = require("graphql");
const { userType } = require("./userSchema");
const { adminType } = require("./adminSchema");
const { agencyType } = require("./agencySchema");
const { bidType } = require("./bidSchema");
const { custompackageType } = require("./custompackageSchema");



const schema = `
${userType}
${adminType}
${agencyType}
${bidType}
${custompackageType}



 type RootQuery{
    adminProfile : Admin!
    user : [User!]!

    agencys:[Agency!]!
    categorys: [Category!]!
    services:[Services!]!

    userProfile_display(_id:String!): User!

    
    userlogin(username: String! , password: String! , userType:String! ): UserAuthData!
    adminlogin(username: String! , password: String! ): AdminAuthData!   

    


    custompackage_display(id:String!): [Custompackage!]
    agency_profile_display(_id:String!): [Agency!]
 }

 type RootMutation{
    createUser(userInput: UserInput): User!
    updateUser(_id:ID!, fullname:String!):User!
    createCustompackage(custompackageInput:CustompackageInput):Custompackage
    updateAdmin(name: String , password: String): Admin!
    createCategory(name: String!):Category
    createServices(name:String!):Services

    createBid(bidInput:BidInput):Bid


    createAgency(agencyInput: AgencyInput):Agency!
    updateAgencyProfile( updateAgency: UpdateAgency, _id:ID!):Agency!
   
    

    hide_custompackage(uid:String! , _id:String):String!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`;

module.exports = buildSchema(schema);