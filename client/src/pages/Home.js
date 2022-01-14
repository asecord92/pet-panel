import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CssBaseline } from "@mui/material";
import { Typography, Box } from "@mui/material";
import SideBar from "../components/SideBar";
import { QUERY_POSTS, QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import PostList from "../components/PostList";
const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);

  const posts = data?.posts || [];

  return (
    <>
      <CssBaseline />
      <Box
        textAlign="center"
        sx={{ width: "35%", justifyContent: "flex-start" }}
      >
        <Typography variant="h5">Most Recent:</Typography>
      </Box>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <PostList posts={posts} />

          <SideBar />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
