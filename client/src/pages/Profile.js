import React from "react";
import Container from "@mui/material/Container";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });
  console.log(data);
  const user = data.user || {};
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/profile" />;
  // }
  if (loading) {
    return <div> Loading...</div>;
  }
  // if (!user?.username) {
  //   return (
  //     <Box textAlign="center">
  //       <Paper elevation={2} sx={{ bgcolor: "grey" }}>
  //         <Typography variant="h5">
  //           You must me logged in to see this page!
  //         </Typography>
  //         <Link href="/login" variant="body2">
  //           Click here to Sign in
  //         </Link>
  //       </Paper>
  //     </Box>
  //   );
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {user.username}'s profile.
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">Test</div>
      </div>
    </div>
  );

  // return (
  //   <Container>
  //     <h3>This is Profile</h3>
  //   </Container>
  // );
};

export default Profile;
