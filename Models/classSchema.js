const mongoose = require('mongoose');
const AutoIncrement = require("mongoose-sequence")(mongoose);

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



classSchema.plugin(AutoIncrement, { id: "class_Id", inc_field: "_id" });

module.exports = new mongoose.model("Class", classSchema);

