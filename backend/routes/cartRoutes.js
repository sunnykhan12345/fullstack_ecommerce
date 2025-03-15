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

// const router = require("express").Router();
// const Cart = require("../models/Cart");
// const Product = require("../models/Product");
// const { protect } = require("../middleware/authMiddleware");

// // @route POST /api/cart
// // @desc Add product to cart for a guest or logged-in user
// // @access Public

// router.post("/", async (req, res) => {
//   try {
//     const { productId, quantity, size, color, guestId, userId } = req.body;

//     // Validate required fields
//     if (!productId || !quantity) {
//       return res
//         .status(400)
//         .json({ message: "Product ID and quantity are required" });
//     }

//     // Check if product exists
//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     let cart;

//     if (userId) {
//       // Logged-in user: Find cart for user
//       cart = await Cart.findOne({ user: userId });
//     } else if (guestId) {
//       // Guest user: Find cart for guest
//       cart = await Cart.findOne({ guestId });
//     } else {
//       return res
//         .status(400)
//         .json({ message: "User ID or Guest ID is required" });
//     }

//     if (!cart) {
//       // Create new cart if not found
//       cart = new Cart({
//         user: userId || null,
//         guestId: guestId || null,
//         items: [],
//       });
//     }

//     // Check if product already exists in the cart
//     const existingItem = cart.items.find(
//       (item) =>
//         item.product.toString() === productId &&
//         item.size === size &&
//         item.color === color
//     );

//     if (existingItem) {
//       // Update quantity if product exists
//       existingItem.quantity += quantity;
//     } else {
//       // Add new item to cart
//       cart.items.push({
//         product: productId,
//         quantity,
//         size,
//         color,
//       });
//     }

//     await cart.save();

//     res.status(200).json({ message: "Product added to cart", cart });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = router;
const router = require("express").Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// @route POST /api/cart
// @desc Add product to cart
// @access Public
// router.post("/", async (req, res) => {
//   try {
//     const { productId, quantity, size, color, guestId, userId } = req.body;

//     if (!productId || !quantity) {
//       return res
//         .status(400)
//         .json({ message: "Product ID and quantity are required" });
//     }

//     if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({ message: "Invalid product ID format" });
//     }

//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     let cart;

//     if (userId) {
//       cart = await Cart.findOne({ user: userId });
//     } else if (guestId) {
//       cart = await Cart.findOne({ guestId });
//     } else {
//       return res
//         .status(400)
//         .json({ message: "User ID or Guest ID is required" });
//     }

//     if (!cart) {
//       cart = new Cart({
//         user: userId || null,
//         guestId: guestId || null,
//         items: [],
//         totalPrice: 0,
//       });
//     }

//     if (!cart.items) {
//       cart.items = [];
//     }

//     const existingItem = cart.items.find(
//       (item) =>
//         item.product.toString() === productId &&
//         item.size === size &&
//         item.color === color
//     );

//     if (existingItem) {
//       existingItem.quantity = quantity;
//     } else {
//       cart.items.push({
//         product: productId,
//         quantity,
//         size,
//         color,
//       });
//     }

//     // ✅ Update total price dynamically
//     cart.totalPrice = cart.items.reduce((total, item) => {
//       const productDetails = product; // Already fetched at the start
//       return total + productDetails.price * item.quantity;
//     }, 0);

//     await cart.save();

//     res.status(200).json({ message: "Product added to cart", cart });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.post("/", async (req, res) => {
  try {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    if (!productId || quantity === undefined) {
      return res
        .status(400)
        .json({ message: "Product ID and quantity are required" });
    }

    if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart;
    if (userId) {
      cart = await Cart.findOne({ user: userId });
    } else if (guestId) {
      cart = await Cart.findOne({ guestId });
    } else {
      return res
        .status(400)
        .json({ message: "User ID or Guest ID is required" });
    }

    if (!cart) {
      cart = new Cart({
        user: userId || null,
        guestId: guestId || null,
        items: [],
        totalPrice: 0,
      });
    }

    if (!cart.items) {
      cart.items = [];
    }

    const existingItem = cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (existingItem) {
      existingItem.quantity = Number(quantity);
      cart.markModified("items"); // ✅ Ensure update
    } else {
      cart.items.push({
        product: productId,
        quantity: Number(quantity), // ✅ Ensure it's a number
        size,
        color,
      });
    }

    cart.totalPrice = cart.items.reduce((total, item) => {
      return total + product.price * item.quantity;
    }, 0);

    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



// @route PUT /api/cart
// @desc update product quantity in the cart for guest and login-user
// @access Public
router.put("/", async (req, res) => {
  try {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    if (!productId || quantity === undefined) {
      return res
        .status(400)
        .json({ message: "Product ID and quantity are required" });
    }

    if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart;
    if (userId) {
      cart = await Cart.findOne({ user: userId });
    } else if (guestId) {
      cart = await Cart.findOne({ guestId });
    } else {
      return res
        .status(400)
        .json({ message: "User ID or Guest ID is required" });
    }

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    if (!cart.items) {
      cart.items = [];
    }

    const existingItem = cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (existingItem) {
      existingItem.quantity = quantity;
    } else {
      return res
        .status(404)
        .json({ message: "Product not found in cart to update" });
    }

    // ✅ Update total price dynamically
    cart.totalPrice = cart.items.reduce((total, item) => {
      return total + product.price * item.quantity;
    }, 0);

    await cart.save();

    res.status(200).json({ message: "Cart updated successfully", cart });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// @route DELETE /api/cart
// @desc Remove item from cart
// @access Public
router.delete("/", async (req, res) => {
  try {
    const { productId, size, color, guestId, userId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }

    let cart;
    if (userId) {
      cart = await Cart.findOne({ user: userId });
    } else if (guestId) {
      cart = await Cart.findOne({ guestId });
    } else {
      return res
        .status(400)
        .json({ message: "User ID or Guest ID is required" });
    }

    if (!cart || !cart.items || cart.items.length === 0) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    // Find index of item to remove
    const itemIndex = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Remove item from cart
    cart.items.splice(itemIndex, 1);

    // ✅ Update total price dynamically
    cart.totalPrice = cart.items.reduce((total, item) => {
      return total + item.quantity * (item.product.price || 0);
    }, 0);

    // If cart is empty after deletion, remove the cart
    if (cart.items.length === 0) {
      await Cart.deleteOne({ _id: cart._id });
      return res.status(200).json({ message: "Cart is now empty" });
    }

    await cart.save();

    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
