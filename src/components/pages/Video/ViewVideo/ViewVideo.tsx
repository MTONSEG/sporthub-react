import React, { useEffect } from 'react';
import './ViewVideo.scss';
import { useParams } from 'react-router-dom';

const ViewVideo: React.FC = () => {
	const params = useParams();

	useEffect((): void => {
		console.log(params);
	}, [])

	return (
		<div className='view-video'>

		</div>
	)
}

export default ViewVideo;