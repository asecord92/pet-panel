import React from "react";
import { Typography, Box, Container, Paper, Link } from "@mui/material";
import PostForm from "../components/PostForm";
import Auth from "../utils/auth";
const AddPost = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: "100px" }}>
      {Auth.loggedIn() ? (
        <Box textAlign="center">
          <Paper elevation={2} sx={{ maxHeight: "275px" }}>
            <Typography sx={{ p: "3px" }} variant="h4">
              Please enter your Post below:
            </Typography>
            <PostForm />
          </Paper>
        </Box>
      ) : (
        <Box textAlign="center">
          <Paper elevation={2} sx={{ bgcolor: "grey" }}>
            <Typography variant="h5">
              You must me logged in to see this page!
            </Typography>
            <Link href="/login" variant="body2">
              Click here to Sign in
            </Link>
          </Paper>
        </Box>
      )}
    </Container>
  );
};

export default AddPost;
