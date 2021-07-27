import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./Style";
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.list}>hello dari home app folder</div>
      <Box border={1} py={2} color="secondary.main">
        teasda
      </Box>
      <Box>ea</Box>
    </>
  );
};

export default Home;
