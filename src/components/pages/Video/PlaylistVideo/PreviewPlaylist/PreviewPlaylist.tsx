import React from 'react';
import './PreviewPlaylist.scss';
import { PlaylistType } from '../../../../../redux/slices/video/videoSlice';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../../hooks/hooks';
import { getPlaylistPreview } from '../../../../../utils/getPlaylistPreview';
import VideoItem from '../../../../common/VideoItem/VideoItem';

type PreviewPlaylistPropsType = {
	playlist: PlaylistType
}

const PreviewPlaylist: React.FC<PreviewPlaylistPropsType> = ({
	playlist
}) => {
	const { ...state } = useAppSelector(state => state.videos);

	return (
		<div className='preview-playlist'>
			<div className="preview-playlist__header">
				<h2 className="preview-playlist__title">
					{playlist.title}
				</h2>
				<Link to={String(playlist.uid)} className='preview-playlist__view-link'>
					{state.titleViewAll}
				</Link>
			</div>

			<div className={`preview-playlist__list ${playlist.list.length <= 3 ? 'small-grid' : ''}`}>

				{
					getPlaylistPreview(playlist.list).map(el => (
						<VideoItem key={el.uid} video={el} />
					))
				}
			</div>
		</div>
	)
}

export default PreviewPlaylist;