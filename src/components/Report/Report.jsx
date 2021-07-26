import {
	Box,
	Button,
	Container,
	FormControlLabel,
	Grid,
	Paper,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { urlApiRest } from '../../utils/endpoints';
import { useStyles } from './Report.styles';
import { useGetData } from './../../hooks/useGetData';
import DataTable from './../CustomComponents/DataTable';
import DatePicker from './../CustomComponents/DatePicker';
import { Controller, useForm } from 'react-hook-form';
import useHandlePaginator from './../../hooks/useHandlePaginator';
import ControlledInput from './../CustomComponents/ControlledInput';
import postForm from './../../helpers/postForm';

const columns = [
	{
		field: 'id',
		headerName: 'ID',
		width: 50,
	},
	{ field: 'cliente', headerName: 'RUC', width: 130, hide: false },
	{ field: 'url', headerName: 'Nombre reporte', width: 340 },
	{
		field: 'fecha_inicio',
		headerName: 'Fecha de inicio',
		width: 120,
		hide: false,
	},
	{
		field: 'fecha_fin',
		headerName: 'Fecha de fin',
		width: 120,
		hide: false,
	},
	{ field: 'download', headerName: 'Descargar', width: 200 },
];

const rows = [
	{
		id: 1,
		fecha_creacion: '2021-01-12 12:10:11',
		ruc: '20478005017',
		razon_social: 'Bizlinks S.A.C.',
	},
	{
		id: 2,
		fecha_creacion: '2021-01-12 12:10:11',
		ruc: '20478005017',
		razon_social: 'Bizlinks S.A.C.',
	},
	{
		id: 3,
		fecha_creacion: '2021-01-12 12:10:11',
		ruc: '20478005017',
		razon_social: 'Bizlinks S.A.C.',
	},
	{
		id: 4,
		fecha_creacion: '2021-01-12 12:10:11',
		ruc: '20478005017',
		razon_social: 'Bizlinks S.A.C.',
	},
	{
		id: 5,
		fecha_creacion: '2021-01-12 12:10:11',
		ruc: '20478005017',
		razon_social: 'Bizlinks S.A.C.',
	},
	{
		id: 6,
		fecha_creacion: '2021-01-12 12:10:11',
		ruc: '20478005017',
		razon_social: 'Bizlinks S.A.C.',
	},
];

const Report = () => {
	const classes = useStyles();
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		process: '',
		cliente: '',
	});
	const { page, query, response, setEvent, setResponse } = useHandlePaginator();
	const { data, isLoading, error } = useGetData(`${urlApiRest}/api/reports`);
	// console.log(data.data.content);

	const handlePageChange = (e) => {
		console.log('fired');
		setResponse(data);
		setEvent(e);
	};

	const handleRequest = (data) => {
		console.log(data);
		if (data.process === 'find') {
			console.log('buscando');
		} else {
			const url = `${data.cliente}_${data.fecha_inicio}_${data.fecha_fin}`;
			data = { ...data, url };
			postForm({ context: 'api/reports', data });
		}
	};

	return (
		<Container fixed maxWidth='md'>
			<Grid container component={Paper} className={classes.paper}>
				<Grid item xs={12}>
					<Typography variant='h6'>Reportes</Typography>
				</Grid>
				<Grid item xs={12}>
					<form
						style={{ maxWidth: '100%' }}
						onSubmit={handleSubmit(handleRequest)}
					>
						<ControlledInput
							control={control}
							name='cliente'
							label='Ruc cliente'
							mt={1}
							value=''
						/>
						<Controller
							control={control}
							name='process'
							render={({ field }) => {
								return (
									<RadioGroup
										// {...field}
										aria-label='process'
										name='process'
										onChange={(e) => field.onChange(e)}
										defaultValue=''
									>
										<FormControlLabel
											value='generate'
											control={<Radio color='primary' />}
											label='Generar reporte'
										/>
										<FormControlLabel
											value='find'
											control={<Radio color='primary' />}
											label='Buscar reporte'
										/>
									</RadioGroup>
								);
							}}
						/>
						<Controller
							render={({ field }) => {
								return (
									<DatePicker
										// {...field}
										name={field.name}
										label='Fecha inicio'
										onChange={(e) => field.onChange(e)}
									/>
								);
							}}
							control={control}
							name='fecha_inicio'
						/>
						<Controller
							render={({ field }) => {
								return (
									<DatePicker
										// {...field}
										name={field.name}
										label='Fecha Fin'
										onChange={(e) => field.onChange(e)}
									/>
								);
							}}
							control={control}
							name='fecha_fin'
						/>
						<Button
							color='primary'
							variant='contained'
							type='submit'
							className={classes.button}
						>
							Procesar
						</Button>
						<Button
							color='primary'
							variant='outlined'
							className={classes.button}
							onClick={() => {
								reset();
							}}
						>
							Limpiar
						</Button>
					</form>
				</Grid>

				<DataTable
					columns={columns}
					rows={data?.data.content}
					// rows={rows}
					loading={false}
					// onPageChange={handlePageChange}
				/>
			</Grid>
		</Container>
	);
};

export default Report;
