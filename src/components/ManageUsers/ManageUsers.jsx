import React, { useState } from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { useFetchClients } from '../../hooks/useFetchClients';
import DataTable from './DataTable';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		borderRadius: '20px',
		maxWidth: 900,
		width: '100%',
		flexDirection: 'column',
		minHeight: 200,
		height: '100%',
	},
	ButtonControl: {
		minWidth: 100,
		width: '100%',
	},
}));

const columns = [
	{ field: 'id', headerName: 'ID', width: 70, hide: false },
	{ field: 'ruc', headerName: 'RUC', width: 130, hide: false },
	{ field: 'service_user', headerName: 'Usuario WebService', width: 200 },
	{ field: 'razon_social', headerName: 'Razon Social', width: 200 },
	{ field: 'usuario', headerName: 'Creado por', sortable: false, width: 200 },
];

const ManageUsers = () => {
	const classes = useStyles();

	const { data: res, isLoading, error, setQuery } = useFetchClients();
	const [page, setPage] = useState('');

	const handlePageChange = (event) => {
		if (event.page > page) {
			setPage(event.page);
			const url = new URL(res.pagination.nextPag);
			const params = new URLSearchParams(url.search);
			setQuery({ page: params.get('page'), size: params.get('size') });
		} else if (event.page === 0) {
			setPage('');
			const url = new URL(res.pagination.prevPag);
			const params = new URLSearchParams(url.search);
			setQuery({ size: params.get('size') });
		} else {
			setPage(event.page);
			const url = new URL(res.pagination.prevPag);
			const params = new URLSearchParams(url.search);
			setQuery({ page: params.get('page'), size: params.get('size') });
		}
	};

	return (
		<Grid container alignItems='center' direction='column'>
			<Paper className={classes.paper}>
				<Box xs={12} m={1}>
					<Typography variant='h6'>Registro de clientes</Typography>
				</Box>
				{isLoading ? (
					<DataTable columns={columns} loading={isLoading} />
				) : (
					<DataTable
						columns={columns}
						rows={res.data.content}
						loading={isLoading}
						total={res.pagination.total}
						onPageChange={handlePageChange}
					/>
				)}
			</Paper>
		</Grid>
	);
};

export default ManageUsers;
