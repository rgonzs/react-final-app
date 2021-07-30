import React from 'react';
import { useGetData } from '../../../hooks/useGetData';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { urlApi } from '../../../utils/endpoints';
import useStyles from './styles'



const DashboardTable = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useGetData(`${urlApi}/dashboard`);
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
            aria-label="Tabla de creacion de recursos"
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
