import React, { useEffect } from 'react';
import './PlaylistVideo.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { getPlaylist } from '../../../../redux/slices/video/videoSlice';
import { useParams } from 'react-router-dom';
import PreviewPlaylist from './PreviewPlaylist/PreviewPlaylist';

type PlaylistVideoPropsType = {

}

const PlaylistVideo: React.FC<PlaylistVideoPropsType> = ({

}) => {
	const dispatch = useAppDispatch();
	const { playlistsArr } = useAppSelector(state => state.videos);

	const params = useParams();

	console.log(playlistsArr);

	useEffect((): void => {
		dispatch(getPlaylist());
	}, [])


	return (
		<div className='playlist-video'>
			{
				playlistsArr.map(el => (
					<PreviewPlaylist key={el.uid} playlist={el}/>
				))
			}
		</div>
	)
}

export default PlaylistVideo;