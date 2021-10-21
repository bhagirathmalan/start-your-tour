const { buildSchema } = require("graphql");
const { userType } = require("./userSchema");
const { adminType } = require("./adminSchema");

const schema = `
${userType}
${adminType}


 type RootQuery{
    adminProfile : Admin!
    user : [User!]!


    categorys: [Category!]!



    userlogin(username: String! , password: String! ): UserAuthData!
    adminlogin(username: String! , password: String! ): AdminAuthData!
    



    userProfile : User!

 }

 type RootMutation{
    createUser(userInput: UserInput): User!

    

    updateAdmin(name: String , password: String): Admin!
    createCategory(name: String!): Category!
    
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`;

module.exports = buildSchema(schema);