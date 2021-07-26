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
		ruc: '',
	});
	const { page, query, response, setEvent, setResponse } = useHandlePaginator();
	const { data, isLoading, error } = useGetData(`${urlApiRest}/api/reports`);
	// console.log(data.data.content);

	const handlePageChange = (e) => {
		console.log('fired');
		setResponse(data);
		setEvent(e);
	};

	const handleRequest = (e) => {
		console.log(e);
		// reset({
		// 	process: '',
		// 	ruc: '',
		// });
	};

	return (
		<Container fixed maxWidth='md'>
			{/* <Box display='flex' alignContent={'center'} justifyContent='center'> */}
			<Grid container component={Paper} className={classes.paper}>
				{/* <Paper className={classes.paper} elevation={3}> */}
				<Grid item xs={12}>
					<Typography variant='h6'>Reportes</Typography>
				</Grid>
				<Grid item xs={12}>
					<form
						style={{ maxWidth: '100%' }}
						onSubmit={handleSubmit(handleRequest)}
					>
						{/* <TextField
					id='serie'
					label='Ruc Emisor'
					variant='outlined'
					className={classes.formControl}
				/> */}
						<ControlledInput
							control={control}
							name='ruc'
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
										{...field}
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
						<DatePicker name='inicio' label='Fecha inicio' />
						<DatePicker name='fin' label='Fecha Fin' />
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
				{/* </Paper> */}
			</Grid>
			{/* </Box> */}
		</Container>
	);
};

export default Report;
