import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { green, orange } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D964A",
      light: "#62B649",
    },
    secondary: {
      main: `#FBAF00`,
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', "sans-serif"],
    fontSize: 12,
    fontWeightRegular: 500,
    h3: {
      fontSize: "56px",
      color: "white",
      fontWeight: 700,
    },
    body1: {
      fontSize: "30px",
      color: "white",
      fontWeight: 500,
    },
    caption: {
      fontSize: "20px",
      color: "white",
      fontWeight: 500,
    },
  },
});

export default theme;
