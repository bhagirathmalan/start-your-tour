const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User_model = require("../../models/user");
const Agency_model = require("../../models/agency")
const { dateToString } = require("../../helpers/date");


async function tokengenerator() {
  var token = [];
  for (let i = 0; i < 10; i++) {
    token.push(i);
  }
  var m = token.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = token[m];
    token[m] = token[i];
    token[i] = t;
  }

  console.log(token.join(""), typeof token.join(""));
  const tokenNumber = await parseInt(token.join(""), 10);
  console.log(typeof tokenNumber, tokenNumber);
  return tokenNumber;
}


module.exports = {
  user: async (args, req) => {
    try {
     const users = await User_model.find();
      return users.map((user) => {
        return {
          ...user._doc,
          _id: user.id,
        };
      });
    } catch (err) {
      console.log(err);
    }
  },
  
    createUser: async (args) => {
        try {
          const userID = await User_model.findOne({ phone: args.userInput.phone });

        if (userID) {
          throw new Error("user exists already.");
        }
         
          const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

          const user = new User_model({
              fullname:args.userInput.fullname,
              email:args.userInput.email,
              phone:args.userInput.phone,
              password:hashedPassword
          });

          const userResult = await user.save();
          return {
            ...userResult._doc,
            password: null,
            _id: userResult.id,
            createdAt: dateToString(userResult._doc.createdAt),
            updatedAt: dateToString(userResult._doc.updatedAt),
          };
        } catch (err) {
          throw err;
        }
      },
      userlogin: async ({ username, password , userType }) => {
        try{
          console.log(username);
          console.log(password);
          console.log(userType);
          const user = await User_model.findOne({ phone: username });
          const agency = await Agency_model.findOne({ phone: username });

          
            if (userType !== "USER" && userType !== "AGENCY") {
                  throw new Error("sorry!");
           }
            
          if (!user && !agency) {
            throw new Error("mobile number is incorrect!");
          } else if (userType == "USER") {
            const isEqual = await bcrypt.compare(password, user.password);
              if (!isEqual) {
                throw new Error("Password is incorrect!");
              }
              const token = jwt.sign(
                { userId: user.id, userphone: user._doc.phone,userType: "USER"},
                "superkey",
                {
                  expiresIn: "1d",
                }
              );
              return {
                userId: user.id,
                token: token,
                userType: "USER",
                tokenExpiration: 1
              };
           
            }else if(userType == "AGENCY") {
              const isEqual = await bcrypt.compare(password, agency.password);
              if (!isEqual) {
                throw new Error("Password is incorrect!");
              }
              const token = jwt.sign(
                { userId: agency.id, agencyphone: agency._doc.phone,userType: "AGENCY"},
                "superkey",
                {
                  expiresIn: "1d",
                }
              );
              return {
                userId: agency.id,
                token: token,
                userType: "AGENCY",
                tokenExpiration: 1
              };
  
            }else {
              throw new Error("Some thing went wrong");
            }
          } catch (err) {
            throw err;
          }
  
    
      },
      userProfile_display: async (req) => {
        try {
          const user = await User_model.findById({ _id: req._id });
          return {
            ...user._doc,
            _id: user.id,
          };
        } catch (err) {
          console.log(err);
        }
    },
    agency_profile_display: async (req) =>{
      try{

        const profiles = await Agency_model.find({_id: req._id});
        return profiles.map((profile) => {
          return {
            ...profile._doc,
            _id: profile.id,
          };
        });

      }catch(err){
        throw err
      }
    },
    updateUser: async (args, req) => {
      try{
       
        const result = await User_model.findOneAndUpdate(
          { _id: args._id },
          {
            fullname:args.fullname,

           },
          {
            omitUndefined: true,
            new: true,
          }
          );
          return {
            ...result._doc,
            _id: result.id,
            
          };

      }catch(err){
        throw err;
      }
    },

      
        
};