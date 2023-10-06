import React, { useEffect, useState } from 'react';
import './User.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import Loading from '../../ui/atoms/Loading/Loading';
import { useParams } from 'react-router-dom';

const ContainerMain = React.lazy(() => import('../../containers/ContainerMain/ContainerMain'));
const UserInfo = React.lazy(() => import('./UserInfo/UserInfo'));
const UserTabs = React.lazy(() => import('./UserTabs/UserTabs'));

const User: React.FC = () => {
	const { users } = useAppSelector(state => state.users);
	const { uid } = useParams();

	// if (!users) return <Loading />

	return (
		<React.Suspense fallback={<Loading />}>
			<ContainerMain>
				<>
					<UserInfo currentUID={uid} />
					<UserTabs />
				</>
			</ContainerMain>
		</React.Suspense >
	)
}

export default User;