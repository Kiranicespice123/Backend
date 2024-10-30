const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

//  Model to store the journals
const JournalStoreModel = new mongoose.Schema({
    title: {
      type: String,
      // required:true,
    },
    accessMode: {
      enum: ['public', 'private'],
      // required:true,
    },
    isBookemarked :{
      type: Boolean,
      // required:true,
    },
    StageContent :{
        type: String,
        // required:true,
    },
    moodEmoji :{
        type: String,
        // required:true,
    },
  },{timestamps:true});
  
  JournalStoreModel.pre('save', async function(next) {
    next();
  });
  
  
  module.exports = mongoose.model("JournalStoreModel", JournalStoreModel);
  