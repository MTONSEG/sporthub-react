import React, { ReactElement } from "react";
import './ContainerProfile.scss';

type ContainerPropsType = {
	children: ReactElement,
}

const ContainerProfile: React.FC<ContainerPropsType> = ({ children }) => {
	return (
		<div className="container-profile">
			{children}
		</div>
	)
}

export default ContainerProfile;