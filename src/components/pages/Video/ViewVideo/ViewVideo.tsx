import React, { useEffect } from 'react';
import './ViewVideo.scss';
import { useParams } from 'react-router-dom';
import HeaderViewVideo from './HeaderViewVideo/HeaderViewVideo';
import PlayerViewVideo from './PlayerViewVideo/PlayerViewVideo';
import BodyViewVideo from './BodyViewVideo/BodyViewVideo';

const ViewVideo: React.FC = () => {
	const params = useParams();

	useEffect((): void => {
		console.log(params);
	}, [])

	return (
		<div className='view-video'>
			<HeaderViewVideo />
			<PlayerViewVideo />
			<BodyViewVideo />
		</div>
	)
}

export default ViewVideo;