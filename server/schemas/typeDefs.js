const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    posts: [Post]
    pets: [Pet]
    friends: [User]
  }
  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    replyCount: Int
    replies: [Reply]
    tags: [String]
    categories: [String]
  }
  type Pet {
    _id: ID
    name: String
    username: String
    age: Int
    petType: String
    breed: String
    img: String
  }
  type Reply {
    _id: ID
    replyText: String
    createdAt: String
    username: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    postTrending(username: String): [Post]
    post(_id: ID!): Post
    pets: [Pet]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, categories: String, tags: [String]): Post
    addPet(
      name: String!
      age: Int!
      petType: String!
      breed: String!
      img: String!
    ): Pet
    addReply(postId: ID!, replyText: String!): Post
    addFriend(friendId: ID!): User
    removePost(postId: ID!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;
module.exports = typeDefs;
