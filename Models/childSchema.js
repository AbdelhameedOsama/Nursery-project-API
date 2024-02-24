const mongoose = require("mongoose");
// const {autoInc} = require("auto-increment-group")

//schema creation

// Define the Address sub-schema
const addressSchema = new mongoose.Schema({
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    building: {
      type: String,
      required: true,
    },
  } ,{_id:false}
  );

// Define the Child schema with the updated structure
const childSchema = new mongoose.Schema(
    {
        _id:{
            type : Number,
            required:true,
            index : true
        },
      fullName: {
        type: String,
        required: true,
      }, age: {
        type: Number,
        required: true,
      },
      level: {
        type: String,
        required: true,
        enum: ["PreKG", "KG1", "KG2"], // Level must be one of these values
      },
      address: addressSchema, // Include Address as a sub-document 
  image:{
    type: String ,
    required : true
  }
    },
  );
  
    
    

//create model
const Child = mongoose.model('Child', childSchema);


//auto increment

// Schema.plugin(autoInc, {
//     field: "_id",
//     startAt: 1,
//     unique: true
// });



//export

module.exports = Child;
