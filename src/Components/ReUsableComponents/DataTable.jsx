import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// data recived
export default function DataTable(receiveDataHere) {

  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Instrument</TableCell>
            <TableCell align="right">Quanties</TableCell>
            <TableCell align="right">Avg. cost</TableCell>
            <TableCell align="right">LTP</TableCell>
            <TableCell align="right">Invested</TableCell>
            <TableCell align="right">Cur. val</TableCell>
            <TableCell align="right">P&L</TableCell>

            <TableCell align="right"> Net chg. </TableCell>
            <TableCell align="right"> Day chg. </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {receiveDataHere.holdingData && receiveDataHere.holdingData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tradingsymbol}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.average_price}</TableCell>
              <TableCell align="right">{row.last_price}</TableCell>
              <TableCell align="right">{row.average_price}</TableCell>


                 <TableCell align="right">{row.last_price}</TableCell>

                    <TableCell align="right">{row.pnl}</TableCell>
                       <TableCell align="right">{row.average_price}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
