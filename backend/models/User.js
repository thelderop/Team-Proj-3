const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  zipCode: {
      type:number,
      required: true,
  },
  DOB: {
      type: Date,
      required: true,
        }
    }, 
    {
      timestamps: true
    }   
);


module.exports = User = mongoose.model('users', UserSchema);