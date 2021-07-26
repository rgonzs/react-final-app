import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const ControlledInput = ({
	name,
	label,
	maxLength,
	minLength,
	handleCustomOnChange,
	control,
	passwordRef,
	type = 'text',
	value = '',
}) => {
	const textRules = {
		required: true,
		minLength: {
			value: minLength,
			message: `Longitud minima de ${minLength} carateres`,
		},
		maxLength: {
			value: maxLength,
			message: `Longitud minima de ${maxLength} carateres`,
		},
	};

	const passwordRules = {
		required: true,
		minLength: {
			value: minLength,
			message: `Longitud minima de ${minLength} carateres`,
		},
	};
	const passwordConfirmRules = {
		required: true,
		validate: (value) =>
			value === passwordRef.current || 'Las contraseñas no coinciden',
	};

	return (
		<div>
			<Controller
				render={({ field }) => {
					return (
						<TextField
							{...field}
							name={field.name}
							label={label}
							variant='outlined'
							fullWidth={true}
							autoComplete='false'
							value={value ? value : undefined}
							type={
								type === 'password' || type === 'password_confirm'
									? 'password'
									: 'text'
							}
							inputProps={{
								maxLength:
									type === 'password' || type === 'password_confirm'
										? null
										: 11,
							}}
							onChange={(e) => {
								handleCustomOnChange && handleCustomOnChange(e);
								field.onChange(e);
							}}
						/>
					);
				}}
				rules={
					(type === 'password' && passwordRules) ||
					(type === 'password_confirm' && passwordConfirmRules) ||
					(type === 'text' && textRules)
				}
				control={control}
				defaultValue=''
				// defaultValue={value}
				name={name}
			/>
		</div>
	);
};

export default ControlledInput;
