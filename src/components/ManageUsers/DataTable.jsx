import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const DataTable = ({
	rows,
	onPageChange,
	onPageSizeChange,
	columns = [],
	loading = true,
	total,
}) => {
	return (
		<>
			<DataGrid
				rows={!rows ? [] : rows}
				columns={columns}
				loading={loading}
				paginationMode='server'
				// checkboxSelection
				rowCount={total}
				page={0}
				pageSize={5}
				onPageChange={onPageChange}
				onPageSizeChange={onPageSizeChange}
				rowsPerPageOptions={[5, 10, 25, 50, 100]}
				onRowClick={(e) => alert(e.id, e.columns.RUC)}
				autoHeight
			/>
		</>
	);
};

export default DataTable;
