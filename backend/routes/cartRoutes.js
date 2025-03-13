// const router = require("express").Router()
// const Cart = require("../models/Cart")
// const Product = require("../models/Product")
// const { protect } = require("../middleware/authMiddleware");

// // @route POST /api/cart
// // @desc Add product to cart for a guest or logged in user
// // @access public

// router.post("/cart", async(req,res) =>{
//     try{
//         const{productId, quantity,size,color,guestId,userId} = req.body
//         const product = await Product.findById(productId)
//         if(!product) return res.status(404).json({message:"product not found"})
//     }
//     catch(error){
//         console.log(error)

//     }

// })

const router = require("express").Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

// @route POST /api/cart
// @desc Add product to cart for a guest or logged-in user
// @access Public

router.post("/", async (req, res) => {
  try {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    // Validate required fields
    if (!productId || !quantity) {
      return res
        .status(400)
        .json({ message: "Product ID and quantity are required" });
    }

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart;

    if (userId) {
      // Logged-in user: Find cart for user
      cart = await Cart.findOne({ user: userId });
    } else if (guestId) {
      // Guest user: Find cart for guest
      cart = await Cart.findOne({ guestId });
    } else {
      return res
        .status(400)
        .json({ message: "User ID or Guest ID is required" });
    }

    if (!cart) {
      // Create new cart if not found
      cart = new Cart({
        user: userId || null,
        guestId: guestId || null,
        items: [],
      });
    }

    // Check if product already exists in the cart
    const existingItem = cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (existingItem) {
      // Update quantity if product exists
      existingItem.quantity += quantity;
    } else {
      // Add new item to cart
      cart.items.push({
        product: productId,
        quantity,
        size,
        color,
      });
    }

    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
