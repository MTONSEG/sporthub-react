import React from "react";
import './ContainerAuth.scss';

export const ContainerAuth = ({ children }) => {
	return (
		<div className="container-auth">
			{children}
		</div>
	)
}