const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Product = require("./models/Product")
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/product")
// const products = require("./data/products");

dotenv.config()

// Connect to mongoDB

mongoose.connect(process.env.MONGO_URI);

// function to seed data

const seedData = async() =>{
    try{
        // clear existing data
        await Product.deleteMany()
        await User.deleteMany()
        await Cart.deleteMany();

        // create a default admin user

        const createUser = await User.create({
            name: "Admin User",
            email:"admin@exmaple.com",
            password: "123456",
            role:"admin"
        })

        // Assign the default userID to each product

        const userID = createUser._id;

        const sampleProducts = products.map((product) =>{
            return {...product,user:userID}
        })

        // Insert the products into the database
        await Product.insertMany(sampleProducts)
        console.log("Product data seeded successfully!")
        process.exit()
    }
    catch(error){
        console.log("Error seeding the data:",error)
         process.exit(1);
    }
}
seedData()