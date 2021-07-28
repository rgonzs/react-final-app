import React, { useState } from 'react';
import {
	Box,
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFetchData } from '../../hooks/useFetchClients';
import { useHistory } from 'react-router-dom';

import DataTable from '../CustomComponents/DataTable';
import ModifyClient from '../ModifyClient/ModifyClient';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		borderRadius: '20px',
		// maxWidth: 900,
		width: '100%',
		minHeight: 200,
		height: '100%',
	},
	ButtonControl: {
		minWidth: 100,
		width: '100%',
	},
	input: {
		height: 20,
	},
}));

const columns = [
	{ field: 'id', headerName: 'ID', width: 60, hide: false },
	{ field: 'ruc', headerName: 'RUC', width: 130, sortable: false, hide: false },
	// { field: 'service_user', headerName: 'Usuario WebService', width: 200 },
	{
		field: 'razon_social',
		headerName: 'Razon Social',
		sortable: false,
		width: 200,
	},
	{ field: 'usuario', headerName: 'Creado por', sortable: false, width: 200 },
	{
		field: 'is_active',
		headerName: 'Esta activo?',
		sortable: false,
		width: 140,
		type: 'boolean',
	},
	// {
	// 	field: 'edit',
	// 	headerName: 'Editar',
	// 	sortable: false,
	// 	width: 150,
	// 	renderCell: (params) => (
	// 		<strong>
	// 			{/* {params.id} */}
	// 			<Button
	// 				variant='contained'
	// 				color='primary'
	// 				size='small'
	// 				onClick={(e) => console.log(params.id)}
	// 			>
	// 				editar
	// 			</Button>
	// 		</strong>
	// 	),
	// },
];

const ManageUsers = () => {
	const history = useHistory();
	const classes = useStyles();

	const {
		data: res,
		isLoading,
		error,
		query,
		setQuery,
	} = useFetchData('/api/clients');
	const [page, setPage] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const [modalData, setModalData] = useState(null);
	console.log(res);

	const getQueryParams = (url) => {
		const parsedUrl = new URL(url);
		const params = new URLSearchParams(parsedUrl.search);
		return {
			...(params.get('page') && { page: params.get('page') }),
			...(params.get('size') && { size: params.get('size') }),
			...(params.get('ruc') && { ruc: params.get('ruc') }),
		};
	};

	const handlePageChange = (event) => {
		if (event.page > page) {
			setPage(event.page);
			setQuery(getQueryParams(res.pagination.nextPag));
		} else if (event.page === 0) {
			setPage('');
			setQuery(getQueryParams(res.pagination.prevPag));
		} else {
			setPage(event.page);
			setQuery(getQueryParams(res.pagination.prevPag));
		}
	};

	const handleInputSearchChange = (e) => {
		if (e.target.value.length === 11) {
			setQuery({ ...query, ruc: e.target.value });
			setPage(0);
		}
	};

	const handleResetFilter = (e) => {
		setPage(0);
		setQuery({ page: 1, size: 5 });
	};

	const handleEditClient = (e) => {
		history.push(`/client/${e.row.ruc}/${e.row.id}`);
		setModalData(e.row);
		console.log('fired');
		setOpenModal(true);
	};

	const handleCreateClient = (e) => {
		setOpenModal(true);
	};

	const create = (
		<ModifyClient
			openModal={openModal}
			handleClose={setOpenModal}
			title='Crear cliente'
		/>
	);

	const modify = (
		<ModifyClient
			openModal={openModal}
			handleClose={setOpenModal}
			title='Actualizar cliente'
			data={modalData}
		/>
	);

	return (
		<Container fixed maxWidth='md'>
			{modalData ? modify : create}
			<Grid
				container
				// alignItems='center'
				direction='row'
				component={Paper}
				className={classes.paper}
				justify='space-around'
			>
				<Grid item xs={12}>
					<Typography variant='h6' align='center'>
						Lista de clientes
					</Typography>
				</Grid>
				<Grid item sm={3}>
					<Box>
						<TextField
							variant='outlined'
							placeholder='Introduzca RUC'
							color='primary'
							inputProps={{ maxLength: 11, className: classes.input }}
							onChange={handleInputSearchChange}
						/>
					</Box>
				</Grid>
				<Grid item sm={3}>
					<Box>
						<Button
							variant='contained'
							color='primary'
							fullWidth={true}
							onClick={handleCreateClient}
						>
							Crear Cliente
						</Button>
					</Box>
				</Grid>
				<Grid item sm={3}>
					<Box>
						<Button
							variant='outlined'
							color='primary'
							fullWidth={true}
							onClick={handleResetFilter}
						>
							Limpiar
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12}>
					{isLoading ? (
						<DataTable columns={columns} loading={isLoading} />
					) : res.data ? (
						<DataTable
							columns={columns}
							rows={res.data?.content}
							loading={isLoading}
							total={res.pagination?.total}
							onPageChange={handlePageChange}
							onEditClient={handleEditClient}
						/>
					) : error ? (
						error
					) : (
						<Typography color='error' align='center'>
							No se pudo obtener el recurso, intente mas tarde
						</Typography>
					)}
				</Grid>
			</Grid>
		</Container>
	);
};

export default ManageUsers;
