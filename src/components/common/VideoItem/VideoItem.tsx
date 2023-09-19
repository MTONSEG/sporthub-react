import React from 'react';
import './VideoItem.scss';

interface IVideoItem {
	text?: string,
	className?: string
}

const VideoItem: React.FC<IVideoItem> = ({ text, className }) => {
	const nameClass = className ? className : '';

	return (
		<h1 className={`title ${nameClass}`}>{text}</h1>
	)
}

export default VideoItem;