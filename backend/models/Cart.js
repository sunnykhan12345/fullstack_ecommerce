// const mongoose = require("mongoose");
// const products = require("../data/Product");

// const cartItemSchema = new mongoose.Schema({
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//     required: true,
//   },
//   name: String,
//   image: String,
//   price: String,
//   size: String,
//   color: String,
//   quantity:{
//     type:Number,
//     default:1,
//   },
// },
// {_id:false}

// );

// const cartSchema = new mongoose.Schema({
//     user:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//     },
//     guestId:{
//         type:String,
//     },
//     products:[cartItemSchema],
//     totalPrice:{
//         type:Number,
//         required:true,
//         default:0,
//     },

// },
// {timestamps:true}
// )
// module.exports =mongoose.model("Cart", cartSchema)

const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  name: String,
  image: String,
  price: {
    type: Number,
    required: true,
  },
  size: String,
  color: String,
  quantity: {
    type: Number,
    default: 1,
  },
});

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    guestId: {
      type: String,
    },
    products: [cartItemSchema],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

// Auto-update total price before saving the cart
cartSchema.pre("save", function (next) {
  this.totalPrice = this.products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  next();
});

module.exports = mongoose.model("Cart", cartSchema);
