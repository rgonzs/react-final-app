import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	TextField,
	Grid,
	Box,
} from '@material-ui/core';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import ControlledInput from '../CustomComponents/ControlledInput';
import { getRucData } from './../../helpers/getRucData';
import postForm from './../../helpers/postForm';
import putForm from './../../helpers/putForm';
import { AuthContext } from './../../Auth';

const ModifyClient = ({ title, openModal, handleClose, data }) => {
	const { currentUser, token } = useContext(AuthContext);
	const {
		watch,
		control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm('');
	// console.log(data)

	const [razonSocial, setRazonSocial] = useState('');

	const sendSubmit = (json) => {
		// console.log('Enviando formulario');
		if (data?.is_modify) {
			const form = {
				ruc: json.ruc,
				service_user: json.service_user,
				service_password: json.new_password,
				is_active: json.is_active || false,
			};
			console.log(form);
			putForm({ context: 'api/clients', data: form, token }).then((res) => {
				if (res.success) {
					Swal.fire('Exito', res.message, 'success');
					reset({});
				} else {
					Swal.fire('Error', res.message, 'error');
				}
			});
		} else {
			const form = {
				ruc: json.ruc,
				credentials: [
					{
						service_user: json.service_user,
						service_password: json.new_password,
						is_active: json.is_active ? json.is_active : false,
					},
				],
			};
			console.log(form)
			postForm({ context: 'api/clients', data: form, token }).then((res) => {
				console.log(res)
				if (res.success) {
					Swal.fire('Exito', res.message, 'success');
					reset({});
				} else {
					// console.error(res.message)
					Swal.fire('Error!!', res.message, 'error');
				}
			});
			console.log('json creado');
			reset({});
		}
		handleClose(false);
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

	const handleRucProp = async (ruc) => {
		setRazonSocial(await callApi(data.ruc));
	};

	const new_password = useRef({});
	new_password.current = watch('new_password', '');

	useEffect(() => {
		if (data) {
			handleRucProp(data.ruc);
		}
	}, [data]);

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
									value={data?.razon_social ? data?.razon_social : razonSocial}
								/>
							</Box>
						</Grid>
						<Grid item>
							<Box my={2}>
								<ControlledInput
									name='service_user'
									label='Usuario WS'
									length={20}
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
						<Grid item>
							<Box my={2}>
								<FormControlLabel
									control={
										<Controller
											name='is_active'
											control={control}
											render={({ field }) => (
												<Checkbox {...field} color='primary' />
											)}
										/>
									}
									x
									label='Activo?'
								/>
								{errors.is_active && (
									<Typography color='error'>
										{errors.is_active.message}
									</Typography>
								)}
							</Box>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button type='submit' color='primary' variant='contained'>
							Terminado
						</Button>
						<Button
							onClick={(e) => {
								// handleClose;
								reset({});
								// setRazonSocial('');
								handleClose(false);
							}}
							color='primary'
							variant='outlined'
						>
							Cancelar
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
};

export default ModifyClient;
