// const jwt = require("jsonwebtoken");
// const User = require("../models/User.js");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     } catch (error) {
//       console.error(error);
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   } else {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = protect;
// const jwt = require("jsonwebtoken");
// const User = require("../models/User.js");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       console.log("Token received:", token);

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       console.log("Decoded token:", decoded);

//       if (!decoded.id) {
//         return res.status(401).json({ message: "Invalid token" });
//       }

//       req.user = await User.findById(decoded.id).select("-password");

//       if (!req.user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       next();
//     } catch (error) {
//       console.error("Token verification failed:", error);
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   } else {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = protect;
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("Token received:", token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded token:", decoded);

      if (!decoded._id) {
        return res.status(401).json({ message: "Invalid token structure" });
      }

      req.user = await User.findById(decoded._id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// check it if usr as an admin
// const admin = (req, res, next) => {
//   if (req.user.admin && req.user.role === "admin") {
//     next();
//   } else {
//     res.status(403).json({ message: "Not autorized as a admin" });
//   }
// };

module.exports = { protect };
