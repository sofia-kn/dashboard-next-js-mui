import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   weight: "800",
//   subsets: ["latin"],
// });


function MyApp({ Component, pageProps }) {
  return (
      
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
    
  );
}

export default MyApp;
