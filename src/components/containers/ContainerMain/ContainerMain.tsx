import React, { ReactElement } from 'react';
import './ContainerMain.scss';
import Navbar from '../../pages/Home/Navbar/Navbar';

type ContainerMainPropsType = {
	children: ReactElement,
	float?: boolean
}

const ContainerMain: React.FC<ContainerMainPropsType> = ({ children, float = false }) => {
	return (
		<main className={`main-container`}>
			<div className="main-container__row">
				<Navbar />
				<div className="main-container__body">
					{children}
				</div>
			</div>
		</main>
	)
}

export default ContainerMain;