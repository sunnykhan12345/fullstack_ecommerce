const express = require("express");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc Create a new product
// @access private/Admin
router.post("/", protect, async (req, res) => {
  try {
    const { sku } = req.body;

    // Check if a product with the same SKU already exists
    const existingProduct = await Product.findOne({ sku });

    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "SKU already exists. Use a unique SKU." });
    }

    const product = new Product({
      ...req.body,
      user: req.user._id, // Ensure req.user is set properly
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route PUT /api/products/:id
// @desc Update a product
// @access private/Admin
router.put("/:id", protect, async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the product exists
    let product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update the product fields
    product = await Product.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure data validation
    });

    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
// @route DELETE /api/products/:id
// @desc Delete a product
// @access Private/Admin
router.delete("/:id", protect, async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the product exists
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product
    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
