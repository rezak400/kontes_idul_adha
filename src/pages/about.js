import React from "react";
import { Box, Grid } from "@material-ui/core";
const About = () => {
  return (
    <div>
      hello dari about
      <Box py={1} style={{ backgroundColor: "salmon" }}>
        hello
      </Box>
      <Grid container>
        <Grid item xs={4}>
          tes
        </Grid>
        <Grid item xs={4}>
          tes
        </Grid>
        <Grid item xs={4}>
          tes
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
