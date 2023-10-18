import React from 'react';
import './VideoPlayer.scss';
import { BigPlayButton, ControlBar, ForwardControl, LoadingSpinner, Player, ReplayControl } from 'video-react';

type VideoPlayerPropsType = {
	videoSrc: string,
	posterSrc?: string,
	position?: 'static' | 'absolute';
	maxWidth?: string
}

const VideoPlayer: React.FC<VideoPlayerPropsType> = ({ videoSrc, posterSrc, position = 'absolute', maxWidth }) => {
	return (
		<div className="video-player" style={{ position, maxWidth: maxWidth ? maxWidth : '100%' }}>
			<Player
				src={videoSrc}
				poster={posterSrc}
				aspectRatio='16:9'
			>
				<BigPlayButton position="center" className='video-player__play-btn' />
				<LoadingSpinner />
				<ControlBar autoHide={true} className='video-player__control-bar'>
					<ReplayControl seconds={10} />
					<ForwardControl seconds={10} />
				</ControlBar>
			</Player>
		</div>
	)
}

export default VideoPlayer;