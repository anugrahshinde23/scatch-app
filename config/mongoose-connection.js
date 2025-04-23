const mongoose = require('mongoose');

mongoose
.connect("mongodb://127.0.0.1:27017/scatch-app")
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((err)=>{
    console.log("MongoDB connection failed", err);
})

module.exports = mongoose.connection;