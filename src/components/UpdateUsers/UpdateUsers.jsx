import { Grid, Typography, TextField, Box } from '@material-ui/core';
import React from 'react';
import MainContainer from './../CustomComponents/MainContainer';
import CustomButton from './../CustomComponents/Button';
import { useLocation } from 'react-router-dom';

const UpdateUsers = () => {
	const location = useLocation();
	const { id, ruc, service_user, razon_social } = location.state;
	console.log(id);
	return (
		<MainContainer direction={'row'}>
			<form>
				<Grid item xs={12}>
					<Typography variant='h6' align='center'>
						Actualizacion de Clientes
					</Typography>
				</Grid>
				<Grid item>
					<Box my={2}>
						<TextField
							label='ID de Usuario'
							variant='outlined'
							disabled
							value={id}
						/>
					</Box>
				</Grid>
				<Grid item>
					<Box my={2}>
						<TextField label='RUC' variant='outlined' disabled value={ruc} />
					</Box>
				</Grid>
				<Grid item>
					<Box my={2}>
						<TextField
							label='Razon Social'
							variant='outlined'
							disabled
							value={razon_social}
						/>
					</Box>
				</Grid>
				<Grid item>
					<Box my={2}>
						<TextField
							label='Usuario WS'
							variant='outlined'
							disabled
							value={service_user}
						/>
					</Box>
				</Grid>
				<Grid item>
					<Box my={2}>
						<TextField label='Nueva Contraseña' variant='outlined' />
					</Box>
				</Grid>
				<Grid item>
					<Box my={2}>
						<TextField label='Confirmar Contraseña' variant='outlined' />
					</Box>
				</Grid>
				<Grid item>
					<Box my={2}>
						<CustomButton
							name='Deshabilitar'
							event={(e) => console.log(e.target.value)}
						/>
					</Box>
				</Grid>
				<Grid item>
					<Box my={2}>
						<CustomButton
							name='Actualizar'
							event={(e) => console.log(e.target.value)}
						/>
					</Box>
				</Grid>
			</form>
		</MainContainer>
	);
};

export default UpdateUsers;
