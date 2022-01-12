import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation AddFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($postText: String!, $categories: String, $tags: [String]) {
    addPost(postText: $postText, categories: $categories, tags: $tags) {
      _id
      postText
      createdAt
      username
      replyCount
      replies {
        _id
      }
      tags
      categories
    }
  }
`;

export const ADD_REPLY = gql`
  mutation AddReply($postId: ID!, $replyText: String!) {
    addReply(postId: $postId, replyText: $replyText) {
      _id
      replyCount
      replies {
        _id
        replyText
        createdAt
        username
      }
    }
  }
`;

export const ADD_PET = gql`
  mutation AddPet(
    $name: String!
    $age: Int!
    $petType: String!
    $breed: String!
    $img: String!
  ) {
    addPet(
      name: $name
      age: $age
      petType: $petType
      breed: $breed
      img: $img
    ) {
      _id
      name
      age
      petType
      breed
      img
    }
  }
`;

export const REMOVE_POST = gql`
  mutation RemovePost($postId: ID!) {
    removePost(postId: $postId) {
      username
      _id
    }
  }
`;
