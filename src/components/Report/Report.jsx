import {
	Button,
	Container,
	FormControlLabel,
	Grid,
	Paper,
	Radio,
	RadioGroup,
	Typography,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { urlApiRest } from '../../utils/endpoints';
import { useStyles } from './Report.styles';
import { useGetData } from './../../hooks/useGetData';
import DataTable from './../CustomComponents/DataTable';
import DatePicker from './../CustomComponents/DatePicker';
import { Controller, useForm } from 'react-hook-form';
import ControlledInput from './../CustomComponents/ControlledInput';
import postForm from './../../helpers/postForm';
import { AuthContext } from './../../Auth';
import { getReport } from './../../helpers/reportes/getReport';
import Swal from 'sweetalert2';

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
	// {
	// 	field: 'edit',
	// 	headerName: 'Editar',
	// 	sortable: false,
	// 	width: 150,
	// 	renderCell: (params) => (
	// 		<strong>
	// 			{/* {params.id} */}
	// 			<GetAppIcon
	// 				variant='contained'
	// 				color='primary'
	// 				size='small'
	// 				onClick={(e) => console.log(params.id)}
	// 			>
	// 				editar
	// 			</GetAppIcon>
	// 		</strong>
	// 	),
	// },
];

const Report = () => {
	const { token } = useContext(AuthContext);
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
	const { data, isLoading, error } = useGetData(`${urlApiRest}/api/reports`);
	const [selectedReport, setSelectedReport] = useState('');
	// console.log(data.data.content);

	const handleRequest = (data) => {
		console.log(data);
		if (data.process === 'find') {
			console.log('buscando');
		} else {
			const url = `${data.cliente}_${data.fecha_inicio}_${data.fecha_fin}`;
			data = { ...data, url };
			postForm({ context: 'api/reports', data }).then((res) => {
				if (res.success) {
					Swal.fire('Exito', res.message, 'success')
				} else {
					Swal.fire('Error', res.message, 'error')
				}
			});
		}
	};

	const handleDownloadReport = (e) => {
		selectedReport.forEach((element) => {
			getReport({ id: element.id, name: element.url }, token);
		});
	};

	const handleSelectReport = (e) => {
		const selectedIDs = new Set(e.selectionModel);
		const selectedRowData = data.data.content.filter((row) =>
			selectedIDs.has(row.id)
		);
		setSelectedReport(selectedRowData);
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
						<Button
							color='secondary'
							variant='contained'
							className={classes.button}
							onClick={handleDownloadReport}
						>
							Descargar
						</Button>
					</form>
				</Grid>

				<DataTable
					columns={columns}
					rows={data?.data.content}
					// rows={rows}
					loading={false}
					onSelect={handleSelectReport}
					// onPageChange={handlePageChange}
				/>
			</Grid>
		</Container>
	);
};

export default Report;
