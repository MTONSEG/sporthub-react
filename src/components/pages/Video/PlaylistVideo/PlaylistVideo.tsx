import React, { useEffect } from 'react';
import './PlaylistVideo.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { getPlaylist } from '../../../../redux/slices/video/videoSlice';
import { useParams } from 'react-router-dom';

type PlaylistVideoPropsType = {

}

const PlaylistVideo: React.FC<PlaylistVideoPropsType> = ({

}) => {
	const dispatch = useAppDispatch();
	// const { playlists } = useAppSelector(state => state.videos);

	const params = useParams();

	console.log(params);

	useEffect((): void => {
		// dispatch(getPlaylist());	
	}, [])
	
	
	return (
		<div className='playlist-video'>
			
		</div>
	)
}

export default PlaylistVideo;