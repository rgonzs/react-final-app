import React, { useState } from 'react';
import {
	Typography,
	Paper,
	Grid,
	Button,
	Box,
	TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { motion } from 'framer-motion';
// import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useGetRucData } from './../../hooks/useGetRucData';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		borderRadius: '20px',
		width: 500,
		flexDirection: 'column',
	},
	formControl: {
		minWidth: 100,
		width: '100%',
		'& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
			{
				display: 'none',
			},
		'& input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button':
			{
				'-webkit-appearance': 'none',
				margin: 0,
			},

		'& input[type=number]': {
			'-moz-appearance': 'textfield',
		},
	},
	ButtonControl: {
		minWidth: 100,
		width: '100%',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm('');

	const [razonSocial, setRazonSocial] = useState('');

	let ruc = useGetRucData('20478005017');
	console.log(ruc);

	const sendSubmit = (event) => {
		alert(JSON.stringify(event));
		handleChangeRazonSocial();
	};

	const handleChangeRazonSocial = (event) => {
		console.log(event.target.value);
		// setRazonSocial(ruc.data?.nombre_o_razon_social);
	};

	return (
		<Box
			display='flex'
			// alignContent={'center'}
			justifyContent='center'
			// flexDirection='column'
			mt={10}
			m={5}
		>
			<Paper className={classes.paper} elevation={3}>
				<Typography variant='h6' align='center'>
					Registro de nuevos clientes
				</Typography>
				<Grid container spacing={3} m={2} justify='center' direction='column'>
					<form onSubmit={handleSubmit(sendSubmit)}>
						<Box paddingTop={3}>
							<TextField
								id='ruc_input'
								label='RUC'
								placeholder='Numero de RUC'
								className={classes.formControl}
								variant='outlined'
								type='number'
								onChange={(event) => console.log(event)}
								// onInvalid={() => 'Ingresa un valor correcto'}
								inputProps={{ inputMode: 'numeric', pattern: '[0-9]{11}' }}
								{...register('ruc', { required: true, maxLength: 11 })}
							/>
							{errors.ruc && <span>Este campo es requerido</span>}
						</Box>

						<Box paddingTop={3}>
							<TextField
								disabled
								className={classes.formControl}
								id='razon_social'
								label='Razon Social'
								variant='outlined'
								value={razonSocial}
							/>
						</Box>

						<Box paddingTop={3}>
							<TextField
								id='password-input'
								variant='outlined'
								className={classes.formControl}
								label='Nueva contraseña'
								type='password'
								autoComplete='Nueva contraseña'
								{...register('password', { required: true })}
							/>
							{errors.password && <span>Este campo es requerido</span>}
						</Box>

						<Box paddingTop={3}>
							<TextField
								id='repeated-password-input'
								className={classes.formControl}
								variant='outlined'
								label='Repetir nueva contraseña'
								type='password'
								autoComplete='Repetir nueva contraseña'
								{...register('repeated_password', { required: true })}
							/>
							{errors.repeated_password && <span>Este campo es requerido</span>}
						</Box>
						<Box paddingTop={3}>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								className={classes.ButtonControl}
								onSubmit={handleSubmit(sendSubmit)}
							>
								Crear Empresa
							</Button>

							{/* <motion.button
              className="botones"
              onSubmit={handleSubmit(sendSubmit)}
              onClick={() => {
                Swal.fire({
                  type: 'success',
                  title: `Empresa añadida`,
                  text: 'Valor añadido correctamente',
                });
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Actualizar
            </motion.button> */}
						</Box>
					</form>
				</Grid>
			</Paper>
		</Box>
	);
}
