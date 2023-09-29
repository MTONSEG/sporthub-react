import React from 'react';
import './UserTabs.scss';
import HeaderUserTabs from '../../../common/HeaderTabs/HeaderTabs';
import BodyUserTabs from './BodyUserTabs/BodyUserTabs';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { UserTabPathTypes, setTabValue } from '../../../../redux/slices/userInfo/userInfoSlice';

const UserTabs: React.FC = () => {
	const dispatch = useAppDispatch();
	const { tabList } = useAppSelector(state => state.userInfo);

	const handleOnTabCLick = (value: UserTabPathTypes): void => {
		dispatch(setTabValue(value))
	}
	return (
		<div className='user-tabs'>
			<HeaderUserTabs
				tabList={tabList}
				tabWidth={100}
				handlerUserTabClick={handleOnTabCLick}
			/>
			<BodyUserTabs />
		</div>
	)
}

export default UserTabs;