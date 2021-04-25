import React from 'react';
import { useGet } from './../../hooks/useFetch/useFetch';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const DashboardTable = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useGet('http://10.0.5.128:8001/dashboard');
  console.log(data);
  return (
    <>
      {isLoading && <p>Cargando</p>}
      {data && (
        <TableContainer component={Paper}>
          <p>Cambios recientes</p>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell size="small">Fecha de Modificacion</TableCell>
                <TableCell size="small">RUC</TableCell>
                <TableCell size="small">Razon Social</TableCell>
                <TableCell size="small">Activado por</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.fecha}</TableCell>
                  <TableCell>{row.ruc}</TableCell>
                  <TableCell>{row.rz}</TableCell>
                  <TableCell>{row.user}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default DashboardTable;
