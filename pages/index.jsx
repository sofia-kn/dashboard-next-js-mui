import Typography from "@mui/material/Typography";
import { salesCard } from "../src/data/data";
import Cardbox from "../src/component/CardBox";
import Box from "@mui/material/Box";

export async function getStaticProps() {
  return {
    props: { salesCard },
  };
}
export default function Home({ salesCard }) {
  return (
    <>
      <Typography variant="h2">hello dashboard</Typography>
      <p>hellooooo dashboard</p>
      <Box bgcolor="lightcyan" p='2rem 1rem' borderRadius='1rem'>
        <Typography variant="h2">Today's sales</Typography>
        <Typography variant="subtitle1" mb="2rem">
          summary sales
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={1}
          
        >
          {salesCard.map((item) => (
            <Cardbox
              icon={item.icon}
              count={item.count}
              title={item.title}
              precent={item.precent}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
