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
import React, { useState } from 'react';
import { useStyles } from './Search.classes';

const Search = () => {
  const classes = useStyles();
  const [ruc, setRuc] = useState('');
  const [comprobante, setComprobante] = useState('');
  const [TipoDoc, setTipoDoc] = useState('');

  const handleRuc = (event) => {
    setRuc(event.target.value);
  };

  const handleComprobante = (event) => {
    setComprobante(event.target.value);
  };

  const handleTipoDoc = (event) => {
    console.log(event.target.value);
    setTipoDoc(event.target.value);
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
          <Typography variant="h6">Consulta de comprobantes</Typography>
        </Box>
        <Box paddingTop={3}>
          <TextField
            id="ruc"
            label="Ruc Emisor"
            variant="outlined"
            className={classes.formControl}
            type="text"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={ruc}
            onChange={handleRuc}
          />
        </Box>
        <Box paddingTop={3}>
          <TextField
            id="serie"
            label="Serie-Correlativo"
            variant="outlined"
            className={classes.formControl}
            value={comprobante}
            onChange={handleComprobante}
          />
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
              value={TipoDoc ? TipoDoc : ''}
              onChange={handleTipoDoc}
            >
              <MenuItem aria-label="None" value="">
                Ninguno
              </MenuItem>
              <MenuItem value={'01'}>Factura</MenuItem>
              <MenuItem value={'RC'}>Resumen</MenuItem>
              <MenuItem value={'03'}>Boleta</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box paddingTop={3}>
          <Button
            variant="contained"
            color="primary"
            className={classes.ButtonControl}
          >
            Buscar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Search;
