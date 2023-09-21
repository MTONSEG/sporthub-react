import React, { useEffect } from 'react';
import './UserInfo.scss';
import Picture from '../../../ui/atoms/Picture/Picture';
import ItemUserInfo from './ItemUserInfo/ItemUserInfo';
import { Button } from '../../../ui/atoms/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { useParams } from 'react-router-dom';
import { getUsers } from '../../../../redux/slices/home/userSlice';
import { fetchUserInfo } from '../../../../redux/slices/userInfo/userInfoSlice';
import Loading from '../../../ui/atoms/Loading/Loading';

const UserInfo: React.FC = () => {
	const { user, ...state } = useAppSelector(state => state.userInfo);
	const { uid } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if(!user) dispatch(fetchUserInfo(uid));
	}, []);

	return (
		<div className='info-subscription'>
			<div className="info-subscription__poster-wrap">
				<img src={state.poster.img} alt="poster" className="info-subscription__poster" />
			</div>

			<div className="info-subscription__body">
				<div className="info-subscription__user">
					<div className="info-subscription__photo-wrap">
						{
							state.loading
								? <Loading />
								: <img src={user?.imageUrl} alt='image' className='info-subscription__photo' />
						}

					</div>
					<p className="info-subscription__user-name">
						{`${user?.firstName} ${user?.lastName}`}
					</p>
				</div>

				<ul className="info-subscription__list">
					<ItemUserInfo
						iconID={state.subscribers.iconID}
						text={state.subscribers.text}
						amount='15' />
					<ItemUserInfo
						iconID={state.videos.iconID}
						text={state.videos.text}
						amount='20' />
					<ItemUserInfo
						iconID={state.views.iconID}
						text={state.views.text}
						amount='30' />
				</ul>

				<Button className='info-subscription__btn'>Unsubscribe</Button>
			</div>

		</div>
	)
}

export default UserInfo;