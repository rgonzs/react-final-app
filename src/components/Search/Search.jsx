import {
  InputLabel,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  Typography,
  Paper,
  Box,
} from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useStyles } from './Search.classes';
// import withReactContent from 'sweetalert2-react-content';
// import Swal from 'sweetalert2';
import { usePostSearch } from '../../hooks/usePostSearch';

// const SwalAlert = withReactContent(Swal);
const Search = () => {
  const classes = useStyles();
  const {register,handleSubmit,formState: { errors }} = useForm('');
  const url = 'http://localhost:3333';
  const [res, apiMethod] = usePostSearch({url: url, headers: {ContentType: 'application/json'}});
  const sendSubmit = (data) => {
    apiMethod(data)
  }
  

  return (
    <Box
      display="flex"
      alignContent={'center'}
      justifyContent="center"
      direction={'column'}
    >
      <Paper className={classes.paper} elevation={3}>
        <Box>
          <Typography variant="h6" align="center">
            Consulta de comprobantes
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(sendSubmit)}>
          <Box paddingTop={3}>
            <TextField
              id="ruc"
              label="Ruc Emisor"
              variant="outlined"
              className={classes.formControl}
              type="number"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]{11}' }}
              onInvalid={() => 'Ingresa un valor correcto'}
              {...register('ruc', { required: true })}
            />
            {errors.ruc && <span>Este campo es requerido</span>}
          </Box>
          <Box paddingTop={3}>
            <TextField
              id="serie"
              label="Serie-Correlativo"
              variant="outlined"
              className={classes.formControl}
              {...register('comprobante', { required: true })}
            />
            {errors.comprobante && <span>Este campo es requerido</span>}
          </Box>
          <Box paddingTop={3}>
            <FormControl className={classes.formControl}>
              <InputLabel id="tipo-doc-select-label" variant="outlined">
                Tipo Documento
              </InputLabel>
              <Select
                labelId="tipo-doc-select-label"
                id="tipo-doc-select"
                variant="outlined"
                label="Tipo documento"
                defaultValue={''}
                {...register('TipoDoc', { required: true })}
              >
                <MenuItem aria-label="None" value="">
                  Ninguno
                </MenuItem>
                <MenuItem value={'01'}>Factura</MenuItem>
                <MenuItem value={'RC'}>Resumen</MenuItem>
                <MenuItem value={'03'}>Boleta</MenuItem>
              </Select>
            </FormControl>
            {errors.TipoDoc && <span>Este campo es requerido</span>}
          </Box>
          <Box paddingTop={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.ButtonControl}
            >
              Buscar
            </Button>
          </Box>
          {res.data?.ruc}
        </form>
      </Paper>
    </Box>
  );
};

export default Search;
