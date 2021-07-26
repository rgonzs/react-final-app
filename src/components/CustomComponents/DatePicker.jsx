import React from 'react';

import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

const DatePicker = ({ name, label }) => {
	const classes = useStyles();
	return (
		<>
			<TextField
				id={name}
				label={label}
				type='date'
				defaultValue='2021-05-24'
				InputLabelProps={{
					shrink: true,
				}}
				onChange={(e) => console.log(e.target.value)}
				className={classes.textField}
			/>
		</>
	);
};

export default DatePicker;
