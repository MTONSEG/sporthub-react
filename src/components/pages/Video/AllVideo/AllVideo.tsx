import React from 'react';
import './AllVideo.scss';
import VideoList from '../../../common/VideoList/VideoList';

const AllVideo: React.FC = () => {
	return (
		<div className='all-video'>
			<VideoList title='title' text='text' />
		</div>
	)
}

export default AllVideo;