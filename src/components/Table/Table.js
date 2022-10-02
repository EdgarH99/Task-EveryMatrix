
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import list from '../../assets/icons/list.png';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1007, "Simona", 55, "Simona", <img src={list}/>),
  createData(1008, "Ariana", 45, "Ariana", <img src={list}/>),
  createData(1009, "Adam", 35, "Adam", <img src={list}/>),
  createData(1010, "Jhon", 25,"Jhon", <img src={list}/>),
  createData(1011, "Garry",15, "Garry", <img src={list}/>),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 250,height:350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Profit($)</TableCell>
            <TableCell align="right">Comission($)</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}