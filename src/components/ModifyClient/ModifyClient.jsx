import { Typography } from '@material-ui/core';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	// DialogContentText,
	DialogActions,
	Button,
	TextField,
	Grid,
	Box,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ControlledInput from '../CustomComponents/ControlledInput';
import { getRucData } from './../../helpers/getRucData';

const ModifyClient = ({ title, openModal, handleClose, data }) => {
	const {
		watch,
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
	const new_password = useRef({});
	new_password.current = watch('new_password', '');

	return (
		<>
			<Dialog
				open={openModal}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>{title}</DialogTitle>
				<form onSubmit={handleSubmit(sendSubmit)} style={{ margin: 0 }}>
					<DialogContent>
						{/* <DialogContentText>Registro de clientes</DialogContentText> */}
						<Grid item xs={12}></Grid>
						<Grid item>
							<Box my={2}>
								<ControlledInput
									name='ruc'
									label='RUC'
									length={11}
									handleCustomOnChange={handleChangeRazonSocial}
									control={control}
									value={data && data.ruc}
								/>
								{errors.ruc && (
									<Typography color='error'>{errors.ruc.message}</Typography>
								)}
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
									value={data ? data.razon_social : razonSocial}
								/>
							</Box>
						</Grid>
						<Grid item>
							<Box my={2}>
								<ControlledInput
									name='service_user'
									label='Usuario WS'
									length={10}
									control={control}
									type='text'
									value={data && data.service_user}
								/>
								{errors.service_user && (
									<Typography color='error'>
										{errors.service_user.message}
									</Typography>
								)}
							</Box>
						</Grid>
						<Grid item>
							<Box my={2}>
								<ControlledInput
									name='new_password'
									label='Contraseña'
									length={12}
									control={control}
									type='password'
									minLength={12}
								/>
								{errors.new_password && (
									<Typography color='error'>
										{errors.new_password.message}
									</Typography>
								)}
							</Box>
						</Grid>
						<Grid item>
							<Box my={2}>
								<ControlledInput
									name='confirm_new_password'
									label='Confirmar contraseña'
									length={12}
									control={control}
									type='password_confirm'
									passwordRef={new_password}
									minLength={12}
								/>
								{errors.confirm_new_password && (
									<Typography color='error'>
										{errors.confirm_new_password.message}
									</Typography>
								)}
							</Box>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button type='submit' color='primary' variant='contained'>
							Terminado
						</Button>
						<Button onClick={handleClose} color='primary' variant='outlined'>
							Cancelar
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
};

export default ModifyClient;
