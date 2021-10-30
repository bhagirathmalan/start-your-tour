const adminType = `

type Admin{
    _id:ID!
    name: String!
    password: String
  }
  
  type Category{
    _id: ID!
    name: String!
  }
  type Services{
    _id: ID!
    name:String!
  }
  
  type AdminAuthData{
    userId: ID!
    token: String!
    userType: String!
  }

`;
exports.adminType = adminType;