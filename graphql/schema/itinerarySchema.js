const itineraryType = `

type Itinerary{
    _id : ID!
    days : String
    bidId : Bid
    title: String
    activity: String
    hotelname:String
    
}

input ItineraryInput {
    days : String
    title: String
    activity: String
    hotelname:String

}

`;
exports.itineraryType = itineraryType;