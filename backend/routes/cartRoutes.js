const router = require("express").Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

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

// @route GET /api/cart
// @desc get login user or guest user's cart
// @access Public

// router.get("/", async (req, res) => {
//   const { userId, guestId } = req.query;

//   try {
//     const cart = await getCart(userId, guestId);
//     if (cart) {
//       res.status(200).json(cart);
//     } else {
//       res.status(404).json({ message: "Cart is Empty" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// Function to get cart based on userId or guestId
const getCart = async (userId, guestId) => {
  try {
    let cart;
    if (userId) {
      cart = await Cart.findOne({ userId });
    } else if (guestId) {
      cart = await Cart.findOne({ guestId });
    }
    return cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

// Route to get cart
router.get("/", async (req, res) => {
  const { userId, guestId } = req.query; // Use req.query instead of req.params

  try {
    const cart = await getCart(userId, guestId);
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Cart is Empty" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
