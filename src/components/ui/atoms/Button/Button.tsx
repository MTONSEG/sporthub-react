import React, { CSSProperties, MouseEventHandler } from "react";
import './Button.scss';
import { Link } from "react-router-dom";

type variantType = 'black' | 'default'

type propsType = {
	children: any,
	maxWidth?: string,
	onClickHandler?: MouseEventHandler,
	className?: string,
	style?: CSSProperties,
	centered?: boolean,
	mb?: string | number,
	path?: string,
	variant?: variantType
}

export const Button: React.FC<propsType> = ({
	children,
	maxWidth,
	onClickHandler,
	className = '',
	style = {},
	centered = false,
	mb = 0,
	path = '',
	variant = 'default'
}) => {

	const isCentered = centered ? { margin: '0 auto' } : {};

	const styles = {
		...isCentered,
		maxWidth,
		marginBottom: mb,
		...style
	}

	return (
		<Link to={path} className={`button button_${variant} ${className}`} style={styles}
			onClick={onClickHandler}>
			{children}
		</Link>
	)
}
