const userauthResolvers = require("./userAuth");
const adminauthResolvers = require("./adminAuth");
const custompackageResolvers = require("./custompackageAuth");
const agencyResolvers = require("./agencyAuth");
const bidauthResolver = require("./bidAuth");
const itineraryResolver = require("./itineraryAuth");



const rootResolvers = {
    ...userauthResolvers,
    ...adminauthResolvers,
    ...custompackageResolvers,
    ...agencyResolvers,
    ...bidauthResolver,
    ...itineraryResolver,
};

module.exports = rootResolvers;