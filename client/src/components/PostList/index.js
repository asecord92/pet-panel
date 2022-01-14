import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
const PostList = ({ posts }) => {
  if (!posts.length) {
    return <Typography variant="h4">No Posts to yet!</Typography>;
  }
  return (
    <Grid item xs={12} md={8}>
      {posts &&
        posts.map((post) => (
          <Card sx={{ maxWidth: "90%", mb: "20px" }} key={post._id}>
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
              {"     ||"}

              <Typography variant="caption">
                Replies:
                <Link
                  sx={{ textDecoration: "none", color: "black" }}
                  href={`/post/${post._id}`}
                >
                  {" "}
                  {posts.replyCount}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Grid>
  );
};

export default PostList;
