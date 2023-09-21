import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { products } from "../data/data";
import Box from "@mui/system/Box";
import CountUp from "react-countup";
import LinearProgressCountUp from "../component/LinearProgressCountUp";

function Products() {
  return (
    <TableContainer container={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" color="gray.main">
                #
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="gray.main">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="gray.main">
                Popularity
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="gray.main">
                Sales
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Typography variant="subtitle2">{product.id}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">{product.name}</Typography>
              </TableCell>
              <TableCell>
              <LinearProgressCountUp sales={product.sales} color={product.color}/>
              </TableCell>
              <TableCell>
                <Box
                  variant="contained"
                  bgcolor="rgba(252, 184, 89, 0.12)"
                  p="0.5rem 0.8rem"
                  width={30}
                >
                  <Typography
                    variant="subtitle1"
                    color={product.color}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <CountUp start={0} end={product.sales} duration={4}/>
                    %
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Products;
