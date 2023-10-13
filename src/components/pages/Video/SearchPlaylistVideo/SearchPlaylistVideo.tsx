import React, { useEffect } from 'react';
import './SearchPlaylistVideo.scss';
import Input from '../../../ui/forms/Input/Input';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { VideoFileType, disableBtnSave, enableBtnSave, setSearchVideoValue } from '../../../../redux/slices/video/videoSlice';
import VideoItem from '../../../common/VideoItem/VideoItem';

type SearchPlaylistVideoPropsType = {
	className?: string
	edit?: boolean
}

const SearchPlaylistVideo: React.FC<SearchPlaylistVideoPropsType> = ({ className, edit }) => {
	const { videosList, searchVideosList, currentPlaylist, playlistView, ...state } = useAppSelector(state => state.videos);


	return (
		<div className={className}>
			<div className="amount-select-video">
				{`Selected: ${currentPlaylist.length}`}
			</div>
			<Input
				placeholder={state.searchVideoInput.placeholder}
				value={state.searchVideoInput.value}
				setStateValue={setSearchVideoValue}
			/>

			{
				searchVideosList?.map(el => (
					<VideoItem
						key={el.uid}
						video={el}
						playlistAdd
					/>
				))
			}
		</div>
	)
}

export default SearchPlaylistVideo;