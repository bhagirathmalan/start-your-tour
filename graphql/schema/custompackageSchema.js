const custompackageType = `

type Custompackage{
    _id : ID
    userId: String
    bidId:Bid
    departurelocation : String
    destinationlocation : String
    category: String
    adult: String
    child: String
    infont : String
    personalcare : String
    travelby : String
    departurebetween : String
    hoteltype : String
    meals : String
    mealtype : String
    additionalrequirements : String
    name : String
    email : String
    phone : String
    city : String
    budget : String
    custompackage_status: String
    createdAt: String!
    updatedAt: String!
    
    

}



input CustompackageInput{
    userId:String

    departurelocation : String
    destinationlocation : String
    category: String
    adult: String
    child: String
    infont : String
    personalcare : Boolean
    travelby : String
    departurebetween : String
    hoteltype : String
    meals : String
    mealtype : String
    additionalrequirements : String
    name : String
    email : String
    phone : String
    city : String
    budget : String
    custompackage_status: String

}

`;

exports.custompackageType = custompackageType;
