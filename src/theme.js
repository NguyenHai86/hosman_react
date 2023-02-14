import { createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { border, borderRadius } from "@mui/system";
export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 25,
  },
  palette: {
    primary: {
      main: "#00A05E",
    },
    secondary: {
      main: "#276789",
    },
    tertiary: {
      main: "#464646",
    },
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "search" },
          style: {
            borderColor: "#C5BEBE",
            // borderRadius: "1rem",
          },
        },
      ],
    },
  },
});
