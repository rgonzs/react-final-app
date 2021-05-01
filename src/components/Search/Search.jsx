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
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const SwalAlert = withReactContent(Swal);
const Search = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm('');

  const sendSubmit = (data) => {
    // SwalAlert.showLoading()
    // fetch(' http://10.0.5.128:8001/search', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => console.log(res));
    SwalAlert.fire({
      title: 'Cargando...',
      text: 'Por favor espera mientras se realiza la busqueda',
      showCancelButton: false,
      showConfirmButton: false,
      showLoaderOnConfirm: false,
      preConfirm: (data) => {
        return fetch('http://10.0.5.128:8001/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !SwalAlert.isLoading(),
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        SwalAlert.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };

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
                labelId="demo-simple-select-label"
                id="tipo-doc-select"
                variant="outlined"
                label="Tipo documento"
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
        </form>
      </Paper>
    </Box>
  );
};

export default Search;
