const itineraryType = `

type Itinerary{
    _id : ID!
    days : String
    bidId : String
    title: String
    activity: String
    hotelname:String
    
}

input ItineraryInput {
    days : String
    bidId : String
    title: String
    activity: String
    hotelname:String

}

`;
exports.itineraryType = itineraryType;