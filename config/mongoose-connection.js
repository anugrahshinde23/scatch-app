const mongoose = require('mongoose');
const config = require('config');
const dbgr = require("debug")("development:mongoose");

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch-app`)
.then(()=>{
    dbgr("MongoDB connected successfully");
})
.catch((err)=>{
    console.log("MongoDB connection failed", err);
})

module.exports = mongoose.connection;