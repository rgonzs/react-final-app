import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { urlApi } from '../../utils/endpoints';
import { useStyles } from './Report.styles';
import { useGet } from './../../hooks/Requests/Requests';

const Report = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useGet(`${urlApi}/dashboard`);
  return (
    <Box
      display="flex"
      alignContent={'center'}
      justifyContent="center"
      // direction={'column'}
    >
      <Paper className={classes.paper} elevation={3}>
        <Typography>Reportes</Typography>
        <TextField
          id="serie"
          label="Ruc Emisor"
          variant="outlined"
          className={classes.formControl}
          // {...register('comprobante', { required: true })}
        />
        <Button color="primary" variant="contained" type="submit" className={classes.button}>
          Generar
        </Button>
        <Button color="primary" variant="contained" type="submit" className={classes.button}>
          Buscar
        </Button>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell size="small">Fecha de creacion</TableCell>
                <TableCell size="small">RUC</TableCell>
                <TableCell size="small">Razon Social</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={row.id} hover={true}>
                  <TableCell>{row.fecha}</TableCell>
                  <TableCell>{row.ruc}</TableCell>
                  <TableCell>{row.rz}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Report;
