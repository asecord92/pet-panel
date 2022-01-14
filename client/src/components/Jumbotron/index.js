import React from "react";
import { Paper, Grid, Box } from "@mui/material";
import hero from "../../images/hero.jpg";

const Jumbotron = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        height: "400px",
        mt: 1,
        mb: 4,
        backgroundSize: "cover ",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 35% bottom 80%",
        backgroundImage: `url(${hero})`,
      }}
    >
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          ></Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Jumbotron;
