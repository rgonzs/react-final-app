import React, { useRef } from 'react';
import {
  Divider,
  Paper,
  Typography,
  Grid,
  makeStyles,
  Container,
  Button,
  Box,
  TextField,
} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  middle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    maxWidth: 1000,
  },
  paper: {
    padding: theme.spacing(2),
    minHeight: 200,
    borderRadius: '20px',
  },
}));

const sendSubmit = (data) => {
  // SwalAlert.showLoading()
  fetch(' http://10.0.5.128:8001/account/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => console.log(res));
};
const Account = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm('');

  const new_password = useRef({});
  new_password.current = watch('new_password', '');
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Container className={(classes.root, classes.middle)}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6">
                Cuenta e informacion del usuario
              </Typography>
              <Divider />
              <Typography variant="subtitle2">Nombre:</Typography>
              <Typography variant="body2">Renato Gonzales</Typography>
              <Typography variant="subtitle2">Correo Electronico:</Typography>
              <Typography variant="body2">
                renato.gonzales@bizlinks.la
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Foto del perfil</Typography>
              <Divider />
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <Typography variant="subtitle2">
                    Tamaño recomendado:
                  </Typography>
                  <Typography variant="body2">512 x 512 pixels</Typography>
                  <Typography variant="subtitle2">Tamaño maximo:</Typography>
                  <Typography variant="body2">100KB</Typography>
                </Grid>
                <Grid item xs={6} sm={6} style={{ textAlign: 'center' }}>
                  <AccountCircleIcon color="primary" style={{ fontSize: 90 }} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Actualizar los datos</Typography>
              <Divider />
              <Typography variant="body2">
                Introduzca los siguientes campos para cambiar su contraseña.
                <form onSubmit={handleSubmit(sendSubmit)}>
                  <Box paddingTop={3}>
                    <TextField
                      id="ruc"
                      label="Contraseña antigua"
                      variant="outlined"
                      className={classes.formControl}
                      type="password"
                      onInvalid={() => 'Ingresa un valor correcto'}
                      {...register('old_password', {
                        required: 'Este valor es necesario',
                      })}
                    />
                    {errors.old_password && (
                      <Typography color="error">
                        Este campo es requerido
                      </Typography>
                    )}
                  </Box>
                  <Box paddingTop={3}>
                    <TextField
                      id="new_password"
                      name="new_password"
                      label="Contraseña nueva"
                      variant="outlined"
                      className={classes.formControl}
                      type="password"
                      onInvalid={() => 'Ingresa un valor correcto'}
                      {...register('new_password', {
                        required: 'Debe introducir la nueva contraseña',
                        minLenght: {
                          value: 8,
                          message:
                            'Las contraseñas deben tener al menos 8 caracteres',
                        },
                      })}
                    />
                    {errors.new_password && (
                      <Typography color="error">
                        {errors.new_password.message}
                      </Typography>
                    )}
                  </Box>
                  <Box paddingTop={3}>
                    <TextField
                      id="repeated_new_password"
                      name="repeated_new_password"
                      label="Repita nueva contraseña"
                      variant="outlined"
                      className={classes.formControl}
                      type="password"
                      onInvalid={() => 'Ingresa un valor correcto'}
                      {...register('repeated_new_password', {
                        validate: (value) =>
                          value === new_password.current ||
                          'Las contraseñas no coinciden',
                      })}
                    />
                    {errors.repeated_new_password && (
                      <Typography color='error'>
                        {errors.repeated_new_password.message}
                      </Typography>
                    )}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: '60px' }}
                  >
                    Actualizar
                  </Button>
                </form>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Account;
