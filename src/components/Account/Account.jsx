import React, { useContext, useRef } from 'react';
import {
	Divider,
	Paper,
	Typography,
	Grid,
	Container,
	Button,
	Box,
	TextField,
} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useForm } from 'react-hook-form';
import { useGetData } from '../../hooks/useGetData';
import { urlApiRest } from '../../utils/endpoints';
import useStyles from './styles';
import { AuthContext } from './../../Auth';
import putForm from './../../helpers/putForm';
import Swal from 'sweetalert2';

const Account = () => {
	const classes = useStyles();
	const { token } = useContext(AuthContext);
	const { data } = useGetData(`${urlApiRest}/auth/me`, token);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm('');

	const sendSubmit = (data) => {
		putForm({ context: 'auth/reset', token, data }).then((res) => {
			if (res.success) {
				Swal.fire('Exito', res.message, 'success');
			} else {
        console.log(res)
				Swal.fire('Error!!', res.message.old_password[0], 'error');
			}
		});
	};

	const new_password = useRef({});
	new_password.current = watch('new_password', '');

	return (
		<Container className={(classes.root, classes.middle)}>
			<Box>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							<Typography variant='h6'>
								Cuenta e informacion del usuario
							</Typography>
							<Divider />
							<Typography variant='subtitle2'>Identificador:</Typography>
							<Typography variant='body2'>
								{data?.content.identificador}
							</Typography>
							<Typography variant='subtitle2'>Nombre:</Typography>
							<Typography variant='body2'>
								{data?.content.nombre + ' ' + data?.content.apellido}
							</Typography>
							<Typography variant='subtitle2'>Correo Electronico:</Typography>
							<Typography variant='body2'>{data?.content.correo}</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							<Typography variant='h6'>Foto del perfil</Typography>
							<Divider />
							<Grid container spacing={2}>
								<Grid item sm={6}>
									<Typography variant='subtitle2'>
										Tamaño recomendado:
									</Typography>
									<Typography variant='body2'>512 x 512 pixels</Typography>
									<Typography variant='subtitle2'>Tamaño maximo:</Typography>
									<Typography variant='body2'>100KB</Typography>
									<Button variant='contained' color='primary'>
										Subir foto
									</Button>
								</Grid>
								<Grid item xs={6} sm={6} style={{ textAlign: 'center' }}>
									{data?.content.image ? (
										<img
											src={data?.content.image}
											alt='Avatar'
											style={{ borderRadius: '50%' }}
										/>
									) : (
										<AccountCircleIcon
											color='primary'
											style={{ fontSize: 90 }}
										/>
									)}
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Paper className={classes.paper}>
							<Typography variant='h6'>Actualizar los datos</Typography>
							<Divider />
							<Typography variant='body2'>
								Introduzca los siguientes campos para cambiar su contraseña.
							</Typography>
							<form onSubmit={handleSubmit(sendSubmit)}>
								<Box paddingTop={3}>
									<TextField
										id='ruc'
										label='Contraseña antigua'
										variant='outlined'
										className={classes.formControl}
										type='password'
										onInvalid={() => 'Ingresa un valor correcto'}
										{...register('old_password', {
											required: 'Este valor es necesario',
										})}
									/>
									{errors.old_password && (
										<Typography color='error'>
											Este campo es requerido
										</Typography>
									)}
								</Box>
								<Box paddingTop={3}>
									<TextField
										id='new_password'
										name='new_password'
										label='Contraseña nueva'
										variant='outlined'
										className={classes.formControl}
										type='password'
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
										<Typography color='error'>
											{errors.new_password.message}
										</Typography>
									)}
								</Box>
								<Box paddingTop={3}>
									<TextField
										id='repeated_new_password'
										name='repeated_new_password'
										label='Repita nueva contraseña'
										variant='outlined'
										className={classes.formControl}
										type='password'
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
									variant='contained'
									color='primary'
									type='submit'
									style={{ marginTop: '60px' }}
								>
									Actualizar
								</Button>
							</form>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default Account;
