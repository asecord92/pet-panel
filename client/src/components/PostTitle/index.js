import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Card, CardContent, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";

const PostTitle = ({ postTitle }) => {
  if (postTitle) {
    return (
      <Paper sx={{ mt: "10px" }} variant="outlined">
        {postTitle.map((post) => (
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
          </Card>
        ))}
      </Paper>
    );
  }
  return <div></div>;
};

export default PostTitle;
