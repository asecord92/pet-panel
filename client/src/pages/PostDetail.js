import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";
import {
  Container,
  Box,
  Paper,
  Typography,
  Link,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import SideBar from "../components/SideBar";
const PostDetail = () => {
  const { id: postId } = useParams();

  const { loading, error, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};
  return (
    <Container maxWidth="lg">
      <Box
        textAlign="left"
        sx={{ display: "flex", justifyContent: "space-between", mt: "20px" }}
      >
        <Card sx={{ maxWidth: "60%", mb: "20px" }}>
          <CardContent>
            <Typography variant="p">
              <Link
                sx={{ textDecoration: "none", color: "black" }}
                href={`/post/${post._id}`}
              >
                {post.postText}
              </Link>
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="caption">
              Posted By:
              <Link
                sx={{ textDecoration: "none", color: "black" }}
                href={`/profile/${post.username}`}
              >
                {"     "}
                {post.username}
              </Link>
            </Typography>
            {"    || "}

            <Typography variant="caption" sx={{ color: "black" }}>
              Posted At:
              {post.createdAt}
            </Typography>
            {"     ||  "}

            <Typography variant="caption">
              Replies:
              <Link
                sx={{ textDecoration: "none", color: "black" }}
                href={`/post/${post._id}`}
              >
                {" "}
                {console.log(post.replyCount)}
                {post.replyCount}
              </Link>
            </Typography>
          </CardContent>
        </Card>
        <SideBar />
      </Box>
    </Container>
  );
};

export default PostDetail;
