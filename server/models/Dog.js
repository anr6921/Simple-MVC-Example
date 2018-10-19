const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // trim whitespace
    unique: true, // can't have duplicated of key value
  },
  breed: {
    type: String,
    required: true,
    trim: true, // trim whitespace
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  createdDate: { // find everything at a specific date
    type: Date,
    default: Date.now, // allows us to save date without inputting everytime
  },

});

DogSchema.statics.sayName = (Dog) => {
  console.dir(Dog.name);
};

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
