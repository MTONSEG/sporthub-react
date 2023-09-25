import React from 'react';
import './User.scss';

const ContainerMain = React.lazy(() => import('../../containers/ContainerMain/ContainerMain'));
const UserInfo = React.lazy(() => import('./UserInfo/UserInfo'));

const User: React.FC = () => {
	return (
		<ContainerMain>
			<>
				<UserInfo />
			</>
		</ContainerMain>
	)
}

export default User;