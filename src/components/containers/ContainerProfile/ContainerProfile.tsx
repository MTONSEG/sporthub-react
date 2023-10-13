import React, { ReactElement } from "react";
import './ContainerProfile.scss';

type ContainerPropsType = {
	children: ReactElement,
	maxWidth?: string,
	pb0?: boolean
}


const ContainerProfile: React.FC<ContainerPropsType> = ({ children, maxWidth, pb0 }) => {
	return (
		<div className={`container-profile ${pb0 ? 'pb0' : ''}`} style={maxWidth ? { maxWidth } : {}}>
			{children}
		</div >
	)
}

export default ContainerProfile;