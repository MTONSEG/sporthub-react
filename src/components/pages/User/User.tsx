import React from 'react';
import './User.scss';
import UserInfo from './UserInfo/UserInfo';
import ContainerMain from '../../containers/ContainerMain/ContainerMain';

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