const { buildSchema } = require("graphql");
const { userType } = require("./userSchema");
const { adminType } = require("./adminSchema");
const { agencyType } = require("./agencySchema")
const { agencydetailType } = require("./agencydetailSchema")
const { custompackageType } = require("./custompackageSchema");
const { agencygstdetailType } = require("./agencygstdetailSchema");


const schema = `
${userType}
${adminType}
${agencyType}
${agencydetailType}
${agencygstdetailType}
${custompackageType}



 type RootQuery{
    adminProfile : Admin!
    user : [User!]!

  
    categorys: [Category!]!

    userProfile_display(_id:String!): User!

    
    userlogin(username: String! , password: String! , userType:String! ): UserAuthData!
    adminlogin(username: String! , password: String! ): AdminAuthData!   

    


    custompackage_display(id:String!): [Custompackage!]
    agency_profile_display(_id:String!): [Agency!]
 }

 type RootMutation{
    createUser(userInput: UserInput): User!
    createCustompackage(custompackageInput:CustompackageInput):Custompackage
    updateAdmin(name: String , password: String): Admin!
    createCategory(name: String!): Category


    createAgency(agencyInput: AgencyInput):Agency!
    createAgencydetail(agencydetailInput:AgencydetailInput):Agencydetail!
    createAgencygstdetail(agencygstdetailInput:AgencygstdetailInput):Agencygstdetail!
    

    hide_custompackage(uid:String! , _id:String):String!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`;

module.exports = buildSchema(schema);