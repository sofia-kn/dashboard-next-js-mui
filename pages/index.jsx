import Typography from "@mui/material/Typography";
import { salesCard } from "../src/data/data";
import Cardbox from "../src/component/CardBox";
import Box from "@mui/material/Box";
import Level from "../src/component/Level";
import Products from "../src/component/Products";
import Menu from "../src/component/Menu";
import { Container, Grid, Paper } from "@mui/material";

export async function getStaticProps() {
  return {
    props: { salesCard },
  };
}
export default function Home({ salesCard }) {
  return (
    <>
      <Box display="flex">
        <Menu />

        <Container maxWidth="lg" sx={{ mt: "2.3rem" }}>
          <Grid container spacing={3}>
            <Grid item md={7.8}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "20rem",
                }}
              >
                <Typography variant="h2">Today's sales</Typography>
                <Typography variant="subtitle1" mb="2rem">
                  summary sales
                </Typography>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="space-evenly"
                  gap={1}
                >
                  {salesCard.map((item) => (
                    <Cardbox
                      key={item.id}
                      icon={item.icon}
                      count={item.count}
                      title={item.title}
                      precent={item.precent}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
            <Grid item sm={4} md={4} width="23.8rem">
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "20rem",
                  position: "relative",
                }}
              >
                <Level />
              </Paper>
            </Grid>
            <Grid item md={7.8}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "22.8rem",
                }}
              >
                <Typography variant="h2" mb="1.9rem">
                  Top Products
                </Typography>
                <Products />
              
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
