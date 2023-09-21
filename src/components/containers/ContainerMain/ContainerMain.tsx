import React, { ReactElement } from 'react';
import './ContainerMain.scss';

const Navbar = React.lazy(() => import('../../pages/Home/Navbar/Navbar'));

type ContainerMainPropsType = {
	children: ReactElement,
	float?: boolean
}

const ContainerMain: React.FC<ContainerMainPropsType> = ({ children, float = false }) => {
	return (
		<main className={`main ${float ? '' : 'grid'}`}>
			<Navbar float={float} />
			<div className="main__body">
				{children}
			</div>
		</main>
	)
}

export default ContainerMain;