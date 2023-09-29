import React from 'react';
import './UserTabs.scss';
import HeaderUserTabs from '../../../common/HeaderTabs/HeaderTabs';
import BodyUserTabs from './BodyUserTabs/BodyUserTabs';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { UserTabPathTypes, setTabValue } from '../../../../redux/slices/userInfo/userInfoSlice';

const UserTabs: React.FC = () => {
	const dispatch = useAppDispatch();
	const { tabList,tabValue } = useAppSelector(state => state.userInfo);

	const handlerTabClick = (value: UserTabPathTypes): void => {
		dispatch(setTabValue(value))
	}
	return (
		<div className='user-tabs'>
			<HeaderUserTabs
				tabValue={tabValue}
				tabList={tabList}
				tabWidth={100}
				handlerTabClick={handlerTabClick}
			/>
			<BodyUserTabs />
		</div>
	)
}

export default UserTabs;