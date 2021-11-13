const bidType = `

type Bid{
    _id : ID!
    agencyId: Agency
    custompackageId : Custompackage!
    itineraryId:[Itinerary!]
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
    cotation : String
    totaldays : String
    bid_status : String
    include_services : String
    exclude_services  : String
}

input UpdateBid{
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
    cotation : String
    totaldays : String
    bid_status : String
    include_services : String
    exclude_services  : String

}


input BidInput{
    
    
    agencyId: String
    custompackageId : String

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
    cotation : String
    totaldays : String
    bid_status : String
    include_services : String
    exclude_services  : String


    

}

`;

exports.bidType = bidType;
