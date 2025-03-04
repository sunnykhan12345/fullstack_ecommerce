const router = require("express").Router();
const protect = require("../middleware/authMiddleware.js");
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    console.log("Request body:", req.body);

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password, // Assuming your User model hashes the password in a pre-save hook
      role,
    });

    await newUser.save();

    // ✅ Create JWT token AFTER user creation
    const payload = { _id: newUser._id, role: newUser.role };

    // Synchronous token creation (cleaner than callback version)
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "40h",
    });

    // ✅ Return user + token in response
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      token: token,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
// route post/api/userlogin
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password match
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create JWT token
    const payload = { _id: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "40h",
    });

    // Return response
    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: token,
    });
  } catch (error) {
    console.error("Server Error:", error.message);
    return res.status(500).json({ message: "Server Error" });
  }
});

// profile api for protect

router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
