const userType = `

type User{
    _id : ID!
    fullname : String
    email : String
    phone: String
    password: String
    
}

type UserAuthData{
    userId: ID!
    token: String!
    userType: String!
    tokenExpiration:Int!
  }

input UpdateUser {
   
    fullname: String!
    
  }

input UserInput {
    fullname : String!
    email : String!
    phone: String!
    password: String

}

`;
exports.userType = userType;