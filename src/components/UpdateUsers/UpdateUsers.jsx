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
import './UpdateUsers.css';
// import Swal from 'sweetalert2';
import { useForm, Controller } from 'react-hook-form';
import { getRucData } from '../../helpers/getRucData';

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

const defaultValues = {
	ruc: '',
};

export default function CenteredGrid() {
	const classes = useStyles();
	const {
		register,
		control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm('');

	const [razonSocial, setRazonSocial] = useState('');

	const sendSubmit = (event) => {
		console.log(event);
		alert(JSON.stringify(event));
	};

	const handleChangeRazonSocial = async (event) => {
		if (event.target.value.length === 11) {
			setRazonSocial(await callApi(event.target.value));
		} else {
			setRazonSocial('');
		}
	};

	const callApi = async (ruc) => {
		let result = await getRucData(ruc);
		if (result.content !== null) {
			return result?.content.razonSocial;
		} else if (result.success === false) {
			return result.message;
		} else {
			return result;
		}
	};

	return (
		<Grid container direction='column' alignItems='center'>
			<Paper className={classes.paper}>
				<form onSubmit={handleSubmit(sendSubmit)}>
					<Grid item xs={12}>
						<Box xs={12} m={1}>
							<Typography variant='h6'>Registro de clientes</Typography>
						</Box>
					</Grid>
					<Grid item>
						<Box my={2}>
							<Controller
								render={({ field }) => (
									<TextField
										label='RUC'
										variant='outlined'
										fullWidth={true}
										required={true}
										name={field.name}
										onChange={(e) => {
											handleChangeRazonSocial(e);
											field.onChange(e);
										}}
									/>
								)}
								control={control}
								defaultValue=''
								name='ruc'
							/>
							{/* {errors.ruc && <span>Este campo es requerido</span>} */}
						</Box>
					</Grid>
					<Grid item>
						<Box my={2}>
							<TextField
								id='razon_social'
								label='Razon Social'
								disabled
								variant='outlined'
								helperText='Este campo se completara automaticamente'
								fullWidth={true}
								value={razonSocial}
							/>
						</Box>
					</Grid>
					<Grid item>
						<Box my={2}>
							<TextField
								id='new-password'
								label='Contraseña'
								variant='outlined'
								type='password'
								helperText='Este campo es requerido'
								required={true}
								fullWidth={true}
								// {...register('new_password', { required: true })}
							/>
							{errors.new_password && <span>Este campo es requerido</span>}
						</Box>
					</Grid>
					<Grid item>
						<Box my={2}>
							<TextField
								id='confirm_password'
								label='Confirmar contraseña'
								type='password'
								variant='outlined'
								required={true}
								helperText='Este campo es requerido'
								fullWidth={true}
								// {...register('confirm_password', { required: true })}
							/>
							{errors.confirm_password && <span>Este campo es requerido</span>}
						</Box>
					</Grid>
					<Grid item>
						<Box>
							<Button
								type='submit'
								color='primary'
								variant='contained'
								fullWidth={true}
								onSubmit={() => reset({ defaultValues })}
							>
								Crear cliente
							</Button>
						</Box>
					</Grid>
				</form>
			</Paper>
		</Grid>
	);
}
