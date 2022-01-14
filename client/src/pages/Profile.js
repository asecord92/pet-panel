import React from "react";
import Container from "@mui/material/Container";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography, Grid, CssBaseline } from "@mui/material";
import { Link } from "@mui/material";
import SideBar from "../components/SideBar";
import PostList from "../components/PostList";

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(user.posts);
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }
  if (loading) {
    return <div> Loading...</div>;
  }
  if (!user?.username) {
    return (
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
    );
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ display: "flex" }}>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ ml: 6 }}>
            Viewing {user.username}'s most recent Posts:
          </Typography>
          <PostList posts={user.posts} />

          <SideBar />
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
