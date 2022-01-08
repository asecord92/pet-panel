const { User, Post, Pet } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("posts")
          .populate("pets")
          .populate("friends");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params);
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("posts")
        .populate("pets")
        .populate("friends");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("posts")
        .populate("pets")
        .populate("friends");
    },
    pets: async () => {
      return Pet.find().select("-__v");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }
      const correctPW = await user.isCorrectPassword(password);
      if (!correctPW) {
        throw new AuthenticationError("Incorrect Credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );
        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addPet: async (parent, args, context) => {
      if (context.user) {
        const pet = await Pet.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { pets: pet._id } },
          { new: true }
        );
        return pet;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addReply: async (parent, { postId, postText }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $push: { posts: { postBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        return updatedPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
