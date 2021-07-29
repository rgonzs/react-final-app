import React, { useCallback, useContext } from 'react';
import { withRouter } from 'react-router';
// import firebase from '../../firebase';
import { AuthContext } from './../../Auth';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
	Box,
	Button,
	Container,
	makeStyles,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';

import logo from '../../assets/images/logo_white.png';
import axios from 'axios';
import { urlApiRest } from '../../utils/endpoints';

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

const Login = ({ history }) => {
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm('');
  
  const { currentUser, token, setToken } = useContext(AuthContext);
  console.log(token)

	const handleSignIn = useCallback(
		async (event) => {
			// event.preventDefault();
			const { email, password } = event;
			try {
				const response = await axios.post(
					`${urlApiRest}/auth/login`,
					{
						correo: email,
						password,
					},
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
				localStorage.setItem('access', response.data.content.access);
				localStorage.setItem('refresh', response.data.content.refresh);
				// await firebase.auth().signInWithEmailAndPassword(email, password);
        setToken(response.data.content.access)
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[setToken]
	);


	if (currentUser) {
	  return <Redirect to="/" />;
	}

	return (
		<Container
			direction='column'
			justify='center'
			// alignItems="center"
		>
			<Box
				display='flex'
				component='form'
				onSubmit={handleSubmit(handleSignIn)}
				justifyContent='center'
				alignContent='center'
			>
				<Paper className={classes.paper}>
					<img src={logo} alt='Logo Bizlinks' style={{ width: '100px' }} />
					<Typography variant='h5' className={classes.field} align='center'>
						Iniciar Sesion
					</Typography>

					<TextField
						id='email'
						label='Correo electronico'
						variant='filled'
						type='mail'
						fullWidth
						required
						className={classes.field}
						color='primary'
						{...register('email', { required: true })}
					/>
					{errors.email && <span>Este campo es requerido</span>}
					<TextField
						id='password'
						label='Contraseña'
						variant='filled'
						type='password'
						fullWidth
						required
						color='primary'
						className={classes.field}
						{...register('password', { required: true })}
					/>
					{errors.password && <span>Este campo es requerido</span>}
					<Button
						type='submit'
						variant='contained'
						color='primary'
						fullWidth
						className={classes.field}
					>
						Ingresar
					</Button>
				</Paper>
			</Box>
		</Container>
	);
};

export default withRouter(Login);
