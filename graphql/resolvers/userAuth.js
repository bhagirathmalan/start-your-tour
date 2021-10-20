const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
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
    createUser: async (args) => {
        try {
          const userID = await User.findOne({ phone: args.userInput.phone });

        if (userID) {
          throw new Error("user exists already.");
        }
         
          const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

          const user = new User({
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
      userlogin: async ({ phone, password }) => {
        try {
          const user = await User.findOne({ phone: phone });
          
          if (!user) {
            throw new Error("User not exist!");
          }
            const isEqual = await bcrypt.compare(password, user.password);
            if (!isEqual) {
              throw new Error("Password is incorrect!");
            }
    
            const token = jwt.sign(
              { userId: user.id, phone: user.phone},
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
          }catch (err) {
            throw err;
          }

      },
      userProfile: async (req) => {
        if (!req.isAuth) {
          throw new Error({ status: "error", error: "You not have access" });
        }
        if (req.userType !== "USER") {
          throw new Error({ status: "error", error: "You not have access" });
        }
    
        try {
          const user = await User.findById({ _id: req.userId });
          return {
            ...user._doc,
            _id: user.id,
          };
        } catch (err) {
          console.log(err);
        }
      },
        
};