const mongoose = require('mongoose');
//  const {autoInc} = require("auto-increment-group")

const Schema = new mongoose.Schema({
  _id:{
    type:Number
  },
  name: {
    type: String,
    required: true
  },
  supervisor:{
    type: mongoose.objectId,
    ref: "Teacher",
    unique: true
  },children:{
    type: [Number],
    ref: "Child",
    unique: true
  }
});


//auto increment

// Schema.plugin(autoInc, {
//     field: "_id",
//     startAt: 1,
//     unique: true
// });

module.exports = mongoose.model('Classes', Schema);
