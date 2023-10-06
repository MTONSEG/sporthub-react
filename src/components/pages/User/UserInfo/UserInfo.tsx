import React, { useEffect, useState } from 'react';
import './UserInfo.scss';
import { Button } from '../../../ui/buttons/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { useParams } from 'react-router-dom';
import Loading from '../../../ui/atoms/Loading/Loading';
import { SubscribeParameters, fetchSubscribe, fetchUnsubscribe } from '../../../../redux/slices/home/userSlice';
import { getUserUID } from '../../../../utils/getUserUID';
import icon from '../../../../assets/icons/user.svg';
import { NumStrNullType } from '../../../../redux/slices/auth/singupSlice';

const ItemUserInfo = React.lazy(() => import('./ItemUserInfo/ItemUserInfo'));

type UserInfoPropsType = {
	currentUID: NumStrNullType
}

const UserInfo: React.FC<UserInfoPropsType> = ({currentUID}) => {
	const { ...state } = useAppSelector(state => state.userInfo);
	const { users } = useAppSelector(state => state.users);
	const { uid } = useParams();
	const [subscribed, setSubscribed] = useState<boolean>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (users[getUserUID().uid].subscribes) {
			setSubscribed(users[getUserUID().uid].subscribes[uid]);
		}
	}, [users])

	const handleClickSubscribe = () => {
		let params: SubscribeParameters = {
			userUID: getUserUID().uid,
			subscriberUID: uid
		}
		if (!users[getUserUID().uid].subscribes) {
			dispatch(fetchSubscribe(params));
			setSubscribed(true)
		} else {
			if (users[getUserUID().uid].subscribes[uid]) {
				dispatch(fetchUnsubscribe(params));
			} else {
				dispatch(fetchSubscribe(params));
			}
		}
	}

	if (!users) return <Loading />

	return (
		<div className='info-subscription'>

			<div className="info-subscription__poster-wrap">
				{
					users[currentUID].posterURL
						? <>
							<img src={users[currentUID].posterURL} alt="poster" className="info-subscription__poster" />
							<img src={users[currentUID].posterURL} alt="poster" className="info-subscription__poster info-subscription__poster_mob" />
						</>
						: <span></span>
				}
			</div>

			<div className="info-subscription__body">

				<div className="info-subscription__user">
					<div className="info-subscription__photo-wrap">
						{
							state.loading
								? <Loading />
								: <img
									src={users[currentUID].photoURL ? users[currentUID].photoURL : icon}
									alt='image'
									className='info-subscription__photo' />
						}
					</div>
					<p className="info-subscription__user-name">
						{`${users[currentUID].firstName} ${users[currentUID].lastName}`}
					</p>
				</div>

				<ul className="info-subscription__list">
					<ItemUserInfo
						iconID={state.subscribers.iconID}
						text={state.subscribers.text}
						amount={5} />
					<ItemUserInfo
						iconID={state.videos.iconID}
						text={state.videos.text}
						amount={5} />
					<ItemUserInfo
						iconID={state.views.iconID}
						text={state.views.text}
						amount='30' />
				</ul>
				<div
					className="info-subscription__button-wrap"
					style={getUserUID().uid === uid ? { display: 'none' } : {}}>
					{
						subscribed
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