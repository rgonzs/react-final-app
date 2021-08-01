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
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useStyles } from './Search.classes';
import { useGetDocument } from './../../hooks/useGetDocument';
import { AuthContext } from './../../Auth';
import { JsonTable } from 'react-json-to-html';

const Search = () => {
	const { token } = useContext(AuthContext);
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm('');
	const {
		data: res,
		// isLoading,
		// error,
		setQuery,
	} = useGetDocument(token);

	const sendSubmit = (data) => {
		console.log(data);
		const { ruc, comprobante, tipo_documento } = data;
		const [serie, correlativo] = comprobante.split('-');
		setQuery({ ruc, tipo_documento, serie, correlativo });
	};

	return (
		<Box
			display='flex'
			alignContent={'center'}
			justifyContent='center'
			direction={'column'}
		>
			<Paper className={classes.paper} elevation={3}>
				<Box>
					<Typography variant='h6' align='center'>
						Consulta de comprobantes
					</Typography>
				</Box>
				<form onSubmit={handleSubmit(sendSubmit)}>
					<Box paddingTop={3}>
						<TextField
							id='ruc'
							label='Ruc Emisor'
							variant='outlined'
							className={classes.formControl}
							type='number'
							inputProps={{
								// inputMode: 'numeric',
								maxLength: 11,
								// pattern: '[0-9]{11}',
							}}
							onInvalid={() => 'Ingresa un valor correcto'}
							{...register('ruc', { required: true })}
						/>
						{errors.ruc && (
							<Typography color='error' align='center'>
								Este campo es requerido
							</Typography>
						)}
					</Box>
					<Box paddingTop={3}>
						<TextField
							id='serie'
							label='Serie-Correlativo'
							variant='outlined'
							className={classes.formControl}
							{...register('comprobante', { required: true })}
						/>
						{errors.comprobante && (
							<Typography color='error' align='center'>
								Este campo es requerido
							</Typography>
						)}
					</Box>
					<Box paddingTop={3}>
						<FormControl className={classes.formControl}>
							<InputLabel id='tipo-doc-select-label' variant='outlined'>
								Tipo Documento
							</InputLabel>
							<Select
								labelId='tipo-doc-select-label'
								id='tipo-doc-select'
								variant='outlined'
								label='Tipo documento'
								defaultValue={''}
								{...register('tipo_documento', { required: true })}
							>
								<MenuItem aria-label='None' value=''>
									Ninguno
								</MenuItem>
								<MenuItem value={'01'}>Factura</MenuItem>
								<MenuItem value={'RC'}>Resumen</MenuItem>
								<MenuItem value={'03'}>Boleta</MenuItem>
							</Select>
						</FormControl>
						{errors.tipo_documento && (
							<Typography color='error' align='center'>
								Este campo es requerido
							</Typography>
						)}
					</Box>
					<Box paddingTop={3}>
						<Button
							type='submit'
							variant='contained'
							color='primary'
							className={classes.ButtonControl}
						>
							Buscar
						</Button>
						{/* {isLoading ? null : <JsonTable json={res?.content} />} */}
					</Box>
					{res?.content && <JsonTable json={res?.content} indent={1}/>}
				</form>
			</Paper>
		</Box>
		
	);
};

export default Search;
