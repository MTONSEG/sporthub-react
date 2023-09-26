import React, { ReactElement } from "react";
import './Container.scss';

type ContainerPropsType = {
	children: ReactElement,
	maxWidth?: string
}

const Container: React.FC<ContainerPropsType> = ({ children, maxWidth = '1460px' }) => {
	let styles = {
		maxWidth,
	}

	return (
		<div style={styles} className="container">
				{children}
		</div>
	)
}

export default Container;