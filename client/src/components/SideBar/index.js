import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import PostTitle from "../PostTitle";

const SideBar = () => {
  const loggedIn = Auth.loggedIn();
  const { data } = useQuery(QUERY_ME);
  const postTitle = data?.me || {};
  console.log(postTitle);
  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={4}
        sx={{
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Join the Conversation!
          </Typography>
          <Button href="/addpost" variant="contained" sx={{ width: "50%" }}>
            Add Post
          </Button>
        </Box>
      </Paper>
      {loggedIn && postTitle ? <PostTitle postTitle={postTitle.posts} /> : null}
    </Grid>
  );
};

export default SideBar;
