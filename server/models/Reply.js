const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const replySchema = new Schema(
  {
    replyText: {
      type: String,
      required: "This field cannot be blank!",
      minlength: 1,
      maxlenght: 500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = replySchema;
