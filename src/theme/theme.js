import { createTheme } from "@mui/material/styles";
// import fontSemiBold from "../../public/fonts/Inter-SemiBold.woff";
// import { Inter } from "next/font/google";
// const inter = Inter({
//   weight: "800",
//   subsets: ["latin"],
// });

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

        // "@font-face": {
        //   fontFamily: "SemiBold",
        //   fontStyle: "normal",
        //   fontWeight: 800,
        //   src:'../../public/fonts/Inter-SemiBold.woff',
        //   fontDisplay: "swap",
        // },
      },
    },
  },
  palette: {
    mode: "dark",
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
    orange: {
      main: "#FCB859",
    },
    success: {
      main: "#A9DFD8",
    },
    white: {
      main: "#FFFFFF",
    },
    gray: {
      main: "#87888C",
      light: "#A0A0A0",
      dark:'#6B7280'
    },
    black: {
      main: "#171821",
    },
    red: {
      main: "#FC003C",
    },
    Purple:{
      main:'#7352FF'
    }
  },
  typography: {
    // fontFamily: "SemiBold",
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
    subtitle2: {
      fontSize: "1.3rem",
      fontWeight: "500",
      lineHeight: "1.57rem",
    },
    price: {
      fontSize: "2rem",
      fontWeight: "700",
      lineHeight: "2.4rem",
    },
    profile:{
      fontSize:'2rem',
      fontWeight:'600',
      lineHeight: "1.75rem",
    },
    User:{
      fontSize:'1.6rem',
      fontWeight:'600',
      lineHeight: "1.8rem",

    }
  },
});

export default theme;
