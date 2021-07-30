import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	field: {
		marginTop: theme.spacing(2),
	},
	formCenter: {
		backgroundColor: 'white',
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		borderRadius: '20px',
		width: 400,
		alignItems: 'center',
	},
}));

export default useStyles;
