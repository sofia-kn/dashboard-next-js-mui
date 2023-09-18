import Typography from "@mui/material/Typography";
import { salesCard } from "../src/data/data";
import Cardbox from "../src/component/CardBox";
import Box from "@mui/material/Box";
import Level from "../src/component/Level";
import { Container, Grid } from "@mui/material";

export async function getStaticProps() {
  return {
    props: { salesCard },
  };
}
export default function Home({ salesCard }) {
  return (
    <>
    <Box display='flex'>
          <Box height="100vh" width='20%' bgcolor="red" display='inline-block'>
            <Typography variant="h2">hello dashboard</Typography>
            <p>hellooooo dashboard</p>

          </Box>
      
     <Container maxWidth='lg'>
      <Grid container justifyContent='space-between'>
          <Grid
            item
            md={7.8}
            bgcolor="lightcyan"
            p="2rem 1rem"
            borderRadius="1rem"
         
          >
            <Typography variant="h2">Today's sales</Typography>
            <Typography variant="subtitle1" mb="2rem">
              summary sales
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
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
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            bgcolor="yellow"
            width="23.8rem"
        
          >
            <Level />
          </Grid>
      </Grid>
          </Container>
      
   </Box>
   
      

      
        
    </>
  );
}
