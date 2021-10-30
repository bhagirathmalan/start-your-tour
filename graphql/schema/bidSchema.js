const bidType = `

type Bid{
    _id : ID
    agencyId: String
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
    cotation : String
    totaldays : String
    include_services : String
    exclude_services  : String
    
    
    

}



input BidInput{
    agencyId:String
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
    cotation : String
    totaldays : String
    include_services : String
    exclude_services  : String


    

}

`;

exports.bidType = bidType;
