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

const SideBar = ({ posts }) => {
  const loggedIn = Auth.loggedIn();
  const { data: userData } = useQuery(QUERY_ME);
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
          <Button href="/createPost" variant="contained" sx={{ width: "50%" }}>
            Add Post
          </Button>
        </Box>
      </Paper>
      {loggedIn && userData ? (
        <Paper sx={{ mt: "10px" }} variant="outlined">
          This is where the thoughs go
        </Paper>
      ) : null}
    </Grid>
  );
};

export default SideBar;
