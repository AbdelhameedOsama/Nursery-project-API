const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  _id:{
    type:Number
  },
  name: {
    type: String,
    required: true
  },
  supervisor:{
    type: mongoose.ObjectId,
    ref: "Teacher",
    unique: true
  },children:{
    type: [Number],
    ref: "Child",
    unique: true
  }
});



module.exports = mongoose.model('Class', classSchema);
