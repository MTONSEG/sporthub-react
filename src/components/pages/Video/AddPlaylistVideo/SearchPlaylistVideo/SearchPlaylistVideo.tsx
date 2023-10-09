import React, { useEffect } from 'react';
import './SearchPlaylistVideo.scss';
import Input from '../../../../ui/forms/Input/Input';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { disableBtnSave, enableBtnSave, setSearchVideoValue } from '../../../../../redux/slices/video/videoSlice';
import VideoItem from '../../../../common/VideoItem/VideoItem';

type SearchPlaylistVideoPropsType = {
	className?: string
}

const SearchPlaylistVideo: React.FC<SearchPlaylistVideoPropsType> = ({ className }) => {
	const { videosList,currentPlaylist, ...state } = useAppSelector(state => state.videos);
	const dispatch = useAppDispatch();


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
				videosList?.map(el => (
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