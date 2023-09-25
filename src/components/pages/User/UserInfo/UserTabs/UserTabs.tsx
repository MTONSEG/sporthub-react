import React from 'react';
import './UserTabs.scss';
import HeaderUserTabs from './HeaderUserTabs/HeaderUserTabs';
import BodyUserTabs from './BodyUserTabs/BodyUserTabs';

const UserTabs: React.FC = () => {
	return (
		<div className='user-tabs'>
			<HeaderUserTabs />
			<BodyUserTabs />
		</div>
	)
}

export default UserTabs;