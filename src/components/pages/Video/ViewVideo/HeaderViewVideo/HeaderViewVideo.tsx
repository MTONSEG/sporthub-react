import React, { useEffect } from 'react';
import './HeaderViewVideo.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../../ui/buttons/Button/Button';
import { BaseUser } from '../../../../containers/Main/Main';
import { useAppSelector } from '../../../../../hooks/hooks';
import { getUserUID } from '../../../../../redux/slices/auth/getUserUID';

type HeaderViewVideoPropsType = {
	author: BaseUser
	amountSubs: string,
	titleBtn: string
}

const HeaderViewVideo: React.FC<HeaderViewVideoPropsType> = ({
	author, amountSubs, titleBtn
}) => {
	const navigate = useNavigate();
	const { previewPath } = useAppSelector(state => state.videos);

	useEffect((): void => {
	}, [])

	const handleUserClick = (): void => {
		navigate(`/user/${author.uid}`)
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
						{author.name}
					</p>
					<p className="header-view-video__amount-subs">
						{`${author.amountSubscribers} subscribers`}
					</p>
				</div>
			</div>
			{
				author.uid === getUserUID().uid
					? <></>
					: <Button className='header-view-video__subscribe-btn'>
						{titleBtn}
					</Button>
			}
		</div>
	)
}

export default HeaderViewVideo;