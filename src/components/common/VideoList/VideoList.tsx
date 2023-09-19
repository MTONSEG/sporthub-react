import React from 'react';
import './VideoList.scss';

interface IVideoList {
	text?: string,
	className?: string
}

const VideoList: React.FC<IVideoList> = ({ text, className }) => {
	const nameClass = className ? className : '';

	return (
		<div className="video-list">
			
		</div>
	)
}

export default VideoList;