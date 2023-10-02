import React from 'react';
import './VideoPlayer.scss';
import { BigPlayButton, ControlBar, ForwardControl, LoadingSpinner, Player, ReplayControl } from 'video-react';

type VideoPlayerPropsType = {
	src: string,
}

const VideoPlayer: React.FC<VideoPlayerPropsType> = ({ src }) => {
	return (
		<div className="video-player">
			<Player
				src={src}
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