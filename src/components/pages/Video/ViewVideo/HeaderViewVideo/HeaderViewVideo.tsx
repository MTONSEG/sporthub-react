import React, { useEffect, useState } from 'react';
import './HeaderViewVideo.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../../ui/buttons/Button/Button';
import { BaseUser } from '../../../../containers/Main/Main';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { getUserUID } from '../../../../../utils/getUserUID';
import { SubscribeParameters, User, fetchSubscribe, fetchUnsubscribe } from '../../../../../redux/slices/home/userSlice';
import { NumStrNullType } from '../../../../../redux/slices/auth/singupSlice';

type HeaderViewVideoPropsType = {
	videoID: NumStrNullType,
	author: User,
	authorUID: NumStrNullType,
	titleBtn: string
}

const HeaderViewVideo: React.FC<HeaderViewVideoPropsType> = ({
	author, videoID, authorUID, titleBtn
}) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [subscribed, setSubscribed] = useState<boolean>();
	const { previewPath } = useAppSelector(state => state.videos);
	const { users } = useAppSelector(state => state.users);

	useEffect((): void => {
		if (users[getUserUID().uid].subscribes) {
			setSubscribed(users[getUserUID().uid].subscribes[authorUID]);
		}
	}, [users])

	const handleUserClick = (): void => {
		navigate(`/user/${authorUID}`);
	}
	const handleSubscribe = (): void => {
		let params: SubscribeParameters = {
			userUID: getUserUID().uid,
			subscriberUID: authorUID
		}

		if (!users[getUserUID().uid].subscribes) {
			dispatch(fetchSubscribe(params));
			setSubscribed(true)
		} else {
			if (users[getUserUID().uid].subscribes[authorUID]) {
				dispatch(fetchUnsubscribe(params));
			} else {
				dispatch(fetchSubscribe(params));
			}
		}
	}

	return (
		<div className='header-view-video'>
			<Link
				to={previewPath ? previewPath : '/'}
				className='header-view-video__back-link'>
			</Link>

			<div className="header-view-video__author" onClick={handleUserClick}>
				<div className="header-view-video__photo-wrap">
					<img src={author.photoURL} alt="photo" className="header-view-video__photo" />
				</div>
				<div className="header-view-video__author-info">
					<p className="header-view-video__name">
						{`${author.firstName} ${author.lastName}`}
					</p>
					<p className="header-view-video__amount-subs">
						{`${author.amountSubscribers} subscribers`}
					</p>
				</div>
			</div>
			{
				subscribed
					? <Button
						onClickHandler={handleSubscribe}
						variant='brown'
						style={authorUID === getUserUID().uid ? { display: 'none' } : {}}
						className='header-view-video__subscribe-btn'>
						Unsubscribe
					</Button>
					: <Button
						onClickHandler={handleSubscribe}
						style={authorUID === getUserUID().uid ? { display: 'none' } : {}}
						className='header-view-video__subscribe-btn'>
						{titleBtn}
					</Button>
			}
		</div>
	)
}

export default HeaderViewVideo;