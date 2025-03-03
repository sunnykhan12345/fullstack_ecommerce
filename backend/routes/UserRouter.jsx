// const router = require("express").Router();
// const User = require("../models/User.js");
// // const bcrypt = require("bcrypt");

// // POST API user register
// router.post("/register", async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     console.log(req.body);

//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // ✅ Hash the password BEFORE saving the user
//     // const hashedPassword = await bcrypt.hash(password, 10);

//     // ✅ Save the user with hashed password
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword, // Store hashed password in DB
//       role,
//     });

//     await newUser.save();

//     return res.status(201).json({
//       message: "User registered successfully",
//       user: {
//         _id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         role: newUser.role,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = router;
const router = require("express").Router();
const User = require("../models/User.js");

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    console.log("Request body:", req.body);

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ⚠️ Don't hash the password manually, just save plain password
    const newUser = new User({
      name,
      email,
      password, // Plain password — will be hashed by the schema
      role,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        password:newUser.password,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
