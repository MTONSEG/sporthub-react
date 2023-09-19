import React from "react";
import './Container.scss';

const Container = ({ children, maxWidth = '1460px' }) => {
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