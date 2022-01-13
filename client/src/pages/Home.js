import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CssBaseline } from "@mui/material";
import { Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import { QUERY_POSTS, QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import PostList from "../components/PostList";
const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME);
  const posts = data?.posts || [];

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ display: "flex" }}>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <PostList posts={posts} myposts={userData} />

          <SideBar />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
