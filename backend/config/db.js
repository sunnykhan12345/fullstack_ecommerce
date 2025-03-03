

const monggoose = require("mongoose")

const ConnectDB = () =>{
    try{
        monggoose.connect(process.env.MONGO_URI)
        console.log("MongogDb Connectd Successfully!")
    }
    catch(err) {
        console.log("MongoDb cnnection Failed!", err)
        process.exit(1)
    }
}

module.exports = ConnectDB


























// const mongoose = require("mongoose");
// const ConnectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("mongodb is connected ");
//   } catch (err) {
//     console.log("mongob is not connected", err);
//   }
// };

// module.exports = ConnectDB;
