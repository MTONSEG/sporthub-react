import React, { ReactElement } from 'react';
import './ContainerMain.scss';

const Navbar = React.lazy(() => import('../../pages/Home/Navbar/Navbar'));

type ContainerMainPropsType = {
	children: ReactElement
}

const ContainerMain: React.FC<ContainerMainPropsType> = ({ children }) => {
	return (
		<div className="main">
			<Navbar />
			<div className="main__body">
				{children}
			</div>
		</div>
	)
}

export default ContainerMain;