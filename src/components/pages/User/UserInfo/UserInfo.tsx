import React, { useEffect, useState } from 'react';
import './UserInfo.scss';
import Picture from '../../../ui/atoms/Picture/Picture';
import { Button } from '../../../ui/buttons/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { useParams } from 'react-router-dom';
import Loading from '../../../ui/atoms/Loading/Loading';
import { BaseUser } from '../../../containers/Main/Main';
import { SubscribeParameters, fetchSubscribe, fetchUnsubscribe } from '../../../../redux/slices/home/userSlice';

const ItemUserInfo = React.lazy(() => import('./ItemUserInfo/ItemUserInfo'));

const UserInfo: React.FC = () => {
	const { user, loggedUID, ...state } = useAppSelector(state => state.userInfo);
	const { users } = useAppSelector(state => state.users);
	const { uid } = useParams();
	const dispatch = useAppDispatch();

	const { subscribeList } = useAppSelector(state => state.users);

	useEffect(() => {
		console.log(subscribeList)
	}, [])

	const handleClickSubscribe = () => {
		let params: SubscribeParameters = {
			userUID: loggedUID,
			subscriberUID: uid
		}

		if (users[loggedUID].subscribes[uid]) {
			dispatch(fetchUnsubscribe(params));
			console.log(subscribeList)
		} else {
			dispatch(fetchSubscribe(params));
			console.log(subscribeList)
		}
	}
	if (!loggedUID) return <Loading />
	return (
		<div className='info-subscription'>

			<div className="info-subscription__poster-wrap">
				{
					user.posterURL
						? <>
							<img src={user.posterURL} alt="poster" className="info-subscription__poster" />
							<img src={user.posterURL} alt="poster" className="info-subscription__poster info-subscription__poster_mob" />
						</>
						: <>
							<img src={state.poster.img} alt="poster" className="info-subscription__poster" />
							<img src={state.poster_mob.img} alt="poster" className="info-subscription__poster info-subscription__poster_mob" />
						</>
				}
			</div>

			<div className="info-subscription__body">
				<div className="info-subscription__user">
					<div className="info-subscription__photo-wrap">
						{
							state.loading
								? <Loading />
								: <img src={user?.photoURL} alt='image' className='info-subscription__photo' />
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
				<div
					className="info-subscription__button-wrap"
					style={loggedUID === uid ? { display: 'none' } : {}}>
					{
						users[loggedUID].subscribes[uid]
							?
							(<Button
								variant='brown'
								className='info-subscription__btn'
								onClickHandler={handleClickSubscribe}
							>
								Unsubscribe
							</Button>)
							:
							(<Button
								className='info-subscription__btn'
								onClickHandler={handleClickSubscribe}
							>
								Subscribe
							</Button>)
					}
				</div>
			</div>
		</div>
	)
}

export default UserInfo;