import { createTheme } from "@mui/material/styles";
// import fontSemiBold from "../../public/fonts/Inter-SemiBold.woff";
import { Inter } from "next/font/google";
const inter = Inter({
  weight: "800",
  subsets: ["latin"],
});

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%",
        },
        body: {
          color: "#000",
        },

        "@font-face": {
          fontFamily: "inter400",
          fontStyle: "normal",
          fontWeight: 800,
          src: inter,
          fontDisplay: "swap",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#20AEF3",
    },
    secondary: {
      main: "#F2C8ED",
    },
    error: {
      main: "#FC003C",
    },
    warning: {
      main: "#FEB95A",
    },
    orange:{
    main:'#FCB859'
    },
    success: {
      main: "#A9DFD8",
    },
    white: {
      main: "#FFFFFF",
    },
    gray: {
      main: "#87888C",
      light:'#A0A0A0'
    },
    black: {
      main: "#171821",
    },
  },
  typography: {
    fontFamily: "inter400",
    h2: {
      fontSize: "1.5rem",
      fontWeight: "600",
      lineHeight: "1.8rem",
    },
    h3: {
      fontSize: "1.2rem",
      lineHeight: "1.4rem",
      fontWeight: "500",
    },
    body1: {
      fontSize: "1.6rem",
      lineHeight: "1.3rem",
      fontWeight: "500",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "1.2rem",
    },
    subtitle2:{
      fontSize:'1.3rem',
      fontWeight: "500",
      lineHeight: "1.57rem",
    }
  },
});

export default theme;
