// const express = require("express");
// const Product = require("../models/Product");
// // const {protect} = require("../middleware/authMiddleware.js");

// const router = express.Router();
// // @route POST /api/products
// // @desc Create a new product
// // @access private/Admin
// router.post("/", async (req, res) => {
//   try {
//     const {
//       name,
//       description,
//       price,
//       discountPrice,
//       countInStock,
//       category,
//       brand,
//       sizes,
//       colors,
//       collections,
//       material,
//       gender,
//       images,
//       isFeatured,
//       isPublished,
//       tags,
//       dimensions,
//       weight,
//       sku,
//     } = req.body;

//     const product = new Product({
//       name,
//       description,
//       price,
//       discountPrice,
//       countInStock,
//       category,
//       brand,
//       sizes,
//       colors,
//       collections,
//       material,
//       gender,
//       images,
//       isFeatured,
//       isPublished,
//       tags,
//       dimensions,
//       weight,
//       sku,
//       user: req.user.id,
//     });
//     const createProduct = await product.save();
//     res.status(201).json(createProduct);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Server Errors");
//   }
// });
// module.exports = router;
const express = require("express");
const Product = require("../models/Product");
// const { protect } = require("../middleware/authMiddleware.js"); // Ensure this is correct

const router = express.Router();

// @route POST /api/products
// @desc Create a new product
// @access private/Admin
router.post("/", async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      // user: req.user.id, // Ensure `req.user` is attached by `protect`
    });

    const createProduct = await product.save();
    res.status(201).json(createProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
