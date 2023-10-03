import React, { ReactElement } from "react";
import './ContainerProfile.scss';

type ContainerPropsType = {
	children: ReactElement,
	maxWidth?: string
}


const ContainerProfile: React.FC<ContainerPropsType> = ({ children, maxWidth }) => {
	return (
		<div className="container-profile" style={maxWidth ? { maxWidth } : {}}>
			{children}
		</div >
	)
}

export default ContainerProfile;