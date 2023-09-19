import Typography from "@mui/material/Typography";
import { salesCard } from "../src/data/data";
import Cardbox from "../src/component/CardBox";
import Box from "@mui/material/Box";
import Level from "../src/component/Level";
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

        <Container maxWidth="lg" sx={{mt:'2.3rem'}}>
          <Grid container spacing={3}>
            <Grid item md={7.8}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "20rem",
                }}
              >
                <Typography variant="subtitle1" mb="2rem">
                  <Typography variant="h2">Today's sales</Typography>
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
                  height: "20rem",
                }}
              >
                <Level />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
   
  );
}
