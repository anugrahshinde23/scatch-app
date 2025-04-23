const mongoose = require("mongoose");



const ownerSchema = mongoose.Schema({
  fullname: {
    type: String,
    minlength: 3,
    trim: true,
  },
  email: String,
  password: String,
  isadmin: Boolean,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin : Number
});


module.exports = mongoose.model("Owner", ownerSchema);