import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query Posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
      replyCount
      replies {
        _id
        replyText
        createdAt
        username
      }
      tags
      categories
    }
  }
`;

export const QUERY_POST = gql`
  query Post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      username
      replyCount
      replies {
        _id
        replyText
        createdAt
        username
      }
      tags
      categories
    }
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      friendCount
      posts {
        _id
        postText
        createdAt
        replyCount
        username
        replies {
          replyText
          _id
          createdAt
          username
        }
        tags
        categories
      }
      friends {
        friends {
          _id
          username
        }
      }
      pets {
        _id
        age
        username
        petType
        breed
        img
      }
    }
  }
`;
export const QUERY_ME_SHORT = gql`
  query Me {
    me {
      _id
      username
      email
      friendCount
      friends {
        friends {
          _id
          username
        }
      }
      pets {
        _id
        name
        age
        petType
        breed
        img
      }
    }
  }
`;

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      posts {
        _id
        postText
        createdAt
        tags
        categories
        replyCount
      }
    }
    pets {
      _id
      name
      age
      petType
      breed
      img
    }
  }
`;
