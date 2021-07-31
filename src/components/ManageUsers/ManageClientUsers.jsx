import React, { useContext, useState } from 'react';
import {
	Box,
	Button,
	Container,
	Grid,
	Paper,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFetchData } from '../../hooks/useFetchData';
import { useParams } from 'react-router-dom';

import DataTable from '../CustomComponents/DataTable';
import ModifyClient from '../ModifyClient/ModifyClient';
import { AuthContext } from './../../Auth';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		borderRadius: '20px',
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
	{ field: 'id', headerName: 'ID', width: 70, hide: false },
	{ field: 'service_user', headerName: 'Usuario WebService', width: 200 },
	{
		field: 'is_active',
		headerName: 'Activo?',
		sortable: false,
		width: 200,
		type: 'boolean',
	},
];

const ManageClientUsers = () => {
	const classes = useStyles();
	const { token } = useContext(AuthContext);
	const { ruc, id } = useParams();
	const {
		data: res,
		isLoading,
		error,
		// query,
		setQuery,
	} = useFetchData('/api/details', id, token);
	const [page, setPage] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const [modalData, setModalData] = useState(null);

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

	const handleResetFilter = (e) => {
		setPage(0);
		setQuery({ page: 1, size: 5 });
	};

	const handlePageSizeChange = (e) => {
		setQuery({ page: 1, size: e.pageSize });
	};

	const handleEditClient = (e) => {
		const row = e.row;
		setModalData({ ...row, ruc, is_modify: true });
		setOpenModal(true);
	};

	const handleCreateClient = (e) => {
		setModalData({ ruc, is_modify: false });
		setOpenModal(true);
	};

	const create = (
		<ModifyClient
			openModal={openModal}
			handleClose={setOpenModal}
			title='Crear cliente'
			data={modalData}
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

	// setQuery({ ...query, ruc: id });
	// console.log(modalData);
	return (
		<Container fixed maxWidth='md'>
			{modalData?.is_modify ? modify : create}
			<Grid
				container
				direction='row'
				component={Paper}
				className={classes.paper}
				justify='space-around'
			>
				<Grid item xs={12}>
					<Typography variant='h6' align='center'>
						Lista de usuarios de {ruc}
					</Typography>
				</Grid>
				<Grid item sm={3}>
					<Box>
						<Button
							variant='contained'
							color='primary'
							fullWidth={true}
							onClick={handleCreateClient}
						>
							Crear
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
					) : res?.data ? (
						<DataTable
							columns={columns}
							rows={res.data?.content}
							loading={isLoading}
							total={res.pagination?.total}
							onPageChange={handlePageChange}
							onEditClient={handleEditClient}
							onPageSizeChange={handlePageSizeChange}
						/>
					) : error ? (
						<Typography color='error' align='center'>
							{error}
						</Typography>
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

export default ManageClientUsers;
