import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { motion } from "framer-motion"
import './UpdateUsers.css'
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [client, setClient] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };




    return (
        <Box
            display="flex"
            alignContent={'center'}
            justifyContent="center"
            mt={10}
            m={5}
        >
            <Paper className={classes.paper} elevation={3} >
                <Grid container spacing={3} m={2}>

                    <Grid item xs={6}>

                        <TextField

                            id="standard-full-width"
                            label="Razon social"
                            style={{ margin: 8 }}
                            placeholder="Razon social"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Grid>
                    <Grid item xs={6}>

                        <TextField

                            id="standard-full-width"
                            label="Correo del Analista"
                            style={{ margin: 8 }}
                            placeholder="Correo del Analista"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Grid>
                    <Grid item xs={6}>

                        <TextField

                            id="standard-full-width"
                            label="RUC"
                            style={{ margin: 8 }}
                            placeholder="RUC"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={client}
                                variant="outlined"
                                onChange={handleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="client">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={40}>PSE</MenuItem>
                                <MenuItem value={50}>OSE</MenuItem>
                                <MenuItem value={60}>FACTURADOR SUNAT</MenuItem>
                            </Select>
                            <FormHelperText>Tipo del cliente</FormHelperText>
                        </FormControl>
                    </Grid>
    
                    <Grid item xs={6}>
                        <TextField
                            id="standard-password-input"
                            variant="outlined"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-password-input"
                            variant="outlined"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <motion.button onClick={() => {
                            Swal.fire({
                                icon: 'success',
                                title: `Empresa añadida`,
                                text: 'Valor añadido correctamente',
                            })
                        }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Actualizar</motion.button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

