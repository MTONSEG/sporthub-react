import React, { useEffect, useState } from 'react';
import './User.scss';
import UserTabs from './UserTabs/UserTabs';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import Loading from '../../ui/atoms/Loading/Loading';
import { fetchUserInfo } from '../../../redux/slices/userInfo/userInfoSlice';
import { useParams } from 'react-router-dom';

const ContainerMain = React.lazy(() => import('../../containers/ContainerMain/ContainerMain'));
const UserInfo = React.lazy(() => import('./UserInfo/UserInfo'));

const User: React.FC = () => {
	const loading = useAppSelector(state => state.userInfo.loading);
	const { users } = useAppSelector(state => state.users);
	const dispatch = useAppDispatch();
	const { uid } = useParams();

	useEffect(() => {
		dispatch(fetchUserInfo(uid));
	}, [uid]);

	if (!users) return <Loading />

	return (
		<ContainerMain>
			<>
				<UserInfo/>
				<UserTabs />
			</>
		</ContainerMain>
	)
}

export default User;