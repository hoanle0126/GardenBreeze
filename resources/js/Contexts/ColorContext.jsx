import { alpha, createTheme } from "@mui/material";

export const primary = "#73c93d";
export const secondary = "#FCB142";
export const white = "#fff";

const ColorContext = createTheme({
  palette: {
    primary: {
      main: alpha(primary, 0.7),
      light: alpha(primary, 0.5),
      dark: alpha(primary, 0.9),
      contrastText: "#fff",
    },
    secondary: {
      main: alpha(secondary, 0.7),
      light: alpha(secondary, 0.5),
      dark: alpha(secondary, 0.9),
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      light: "#fff",
      dark: "#fff",
      contrastText: "#000",
    },
  },
});
export default ColorContext;
