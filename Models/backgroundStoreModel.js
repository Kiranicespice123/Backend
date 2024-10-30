const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const BackgroundStoreModel = new mongoose.Schema({
    name: {
      type: String,
      required:true,
      unique: true
    },
    url: {
      type: String,
      required:true,
      unique: true
    },
    theme :{
      type: String,
      required:true,
    },
  });
  
  
  BackgroundStoreModel.pre('save', async function(next) {
    next();
  });
  
  
  module.exports = mongoose.model("BackgroundStoreModel", BackgroundStoreModel);
  