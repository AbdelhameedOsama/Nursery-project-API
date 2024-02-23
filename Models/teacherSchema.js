const mongoose = require('mongoose');
// const {autoInc} = require("auto-increment-group")

const teacherSchema = new mongoose.Schema({
    fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: Number,
    required: true,
    unique :true
  },
  image:{
    type: String ,
    required : true
  }
});


//auto increment

// Schema.plugin(autoInc, {
//     field: "id",
//     startAt: 1,
//     unique: true
// });

//export

module.exports = mongoose.model('Teacher', teacherSchema);
