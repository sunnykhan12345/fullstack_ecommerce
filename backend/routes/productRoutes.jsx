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

// @route GET /api/products
// @desc GET all product with optional query filters
// @access public

router.get("/", async (req, res) => {
  try {
    const {
      collection,
      size,
      gender,
      minPrice,
      maxPrice, // Fixed typo
      sortBy,
      search,
      category,
      material,
      brand,
      color,
      limit,
    } = req.query;

    let query = {};

    // Filter logic
    if (collection && collection.toLowerCase() !== "all") {
      query.collection = collection;
    }
    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }
    if (material) {
      query.material = { $in: material.split(",") };
    }
    if (brand) {
      query.brand = { $in: brand.split(",") };
    }
    if (size) {
      query.size = { $in: size.split(",") };
    }
    if (color) {
      query.colors = { $in: [color] };
    }
    if (gender) {
      query.gender = gender;
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }

    // Fetch data from MongoDB collection (Assuming `Product` is your model)
    const products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});
// @route GET /api/products/:id
// @desc GET a single product by ID
// @access public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Use 'Product' instead of 'product'

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// @route GET /api/products/similar/:id
// @desc Review similar products based on the current products's gender and category
// @access public
router.get("/similar/:id", async(req,res) =>{
  const{id} = req.params
})

module.exports = router;
