const userauthResolvers = require("./userAuth");
const adminauthResolvers = require("./adminAuth");
const custompackageResolvers = require("./custompackageAuth");
const agencyResolvers = require("./agencyAuth");



const rootResolvers = {
    ...userauthResolvers,
    ...adminauthResolvers,
    ...custompackageResolvers,
    ...agencyResolvers,
};

module.exports = rootResolvers;