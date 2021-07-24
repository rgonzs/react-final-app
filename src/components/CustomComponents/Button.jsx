import React from 'react';
import { Button } from '@material-ui/core';

const CustomButton = (props) => {
	return (
		<>
			<Button
				color='primary'
				fullWidth={true}
				variant='contained'
				onClick={props.event}
			>
				{props.name}
			</Button>
		</>
	);
};

export default CustomButton;
