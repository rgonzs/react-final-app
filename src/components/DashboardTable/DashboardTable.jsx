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
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    marginTop: 6,
  },
  table: {
    minWidth: 100,
  },
  paper: {
    height: 250,
  },
});

const DashboardTable = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useGet('http://10.0.5.128:8001/dashboard');
  return (
    <>
      {isLoading && (
        <Paper className={classes.paper}>
          <Typography align="center">Cargando ...</Typography>
        </Paper>
      )}
      {data && (
        <TableContainer component={Paper}>
          <Typography
            variant="h6"
            gutterBottom
            align="center"
            className={classes.title}
          >
            Cambios recientes
          </Typography>
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
                <TableRow key={row.id} hover={true}>
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
      {error && (
        <Paper className={classes.paper}>
          <Typography align="center">
            No se pudo establecer una conexion correcta, intente de nuevo mas
            tarde
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default DashboardTable;
