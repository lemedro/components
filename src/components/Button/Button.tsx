import React from 'react';
import './Button.scss';

export interface ButtonProps {
	label: string;
	accent?: 'primary' | 'secondary';
}

const Button = (props: ButtonProps) => {
	return (
		<button className={`${props.accent ? props.accent : ''}`}>
			{props.label}
		</button>
	);
};

export default Button;
