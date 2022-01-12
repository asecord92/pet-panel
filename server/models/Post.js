const { Schema, model } = require("mongoose");
const replySchema = require("./Reply");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema(
  {
    postText: {
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
    replies: [replySchema],
    tags: [],
    categories: [],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

postSchema.virtual("replyCount").get(function () {
  return this.replies.length;
});
const Post = model("Post", postSchema);

module.exports = Post;
