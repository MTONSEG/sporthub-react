import React from 'react';
import './User.scss';
import UserTabs from './UserTabs/UserTabs';

const ContainerMain = React.lazy(() => import('../../containers/ContainerMain/ContainerMain'));
const UserInfo = React.lazy(() => import('./UserInfo/UserInfo'));

const User: React.FC = () => {
	return (
		<ContainerMain>
			<>
				<UserInfo />
				<UserTabs />
			</>
		</ContainerMain>
	)
}

export default User;