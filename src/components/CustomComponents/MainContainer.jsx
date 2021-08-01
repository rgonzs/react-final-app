import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
}));

const MainContainer = (props) => {
	const classes = useStyles();
	return (
		<Container fixed maxWidth='md'>
			<Grid container component={Paper} className={classes.paper} direction={props.direction}>
				{props.children}
			</Grid>
		</Container>
	);
};
export default MainContainer;
