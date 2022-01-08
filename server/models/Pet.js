const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  petType: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

const Pet = model("Pet", petSchema);

module.exports = Pet;
