import React, { useEffect } from 'react';
import './AddVideo.scss';
import { useParams } from 'react-router-dom';

const AddVideo: React.FC = () => {
	const params = useParams();

	useEffect((): void => {
		console.log(params);
	}, [])

	return (
		<div className='add-video'>

		</div>
	)
}

export default AddVideo;