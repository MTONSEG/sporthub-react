import React, { useEffect, useState } from 'react';
import './AddPlaylistVideo.scss';
import ContainerProfile from '../../../containers/ContainerProfile/ContainerProfile';
import HeaderAddPage from '../AddVideo/HeaderAddPage/HeaderAddPage';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import FormPlaylistVideo from './FormPlaylistVideo/FormPlaylistVideo';
import SearchPlaylistVideo from './SearchPlaylistVideo/SearchPlaylistVideo';
import { getVideos, setPlaylist } from '../../../../redux/slices/video/videoSlice';
import { NumStrNullType } from '../../../../redux/slices/auth/singupSlice';
import { useNavigate } from 'react-router-dom';

type AddPlaylistVideoPropsType = {}

const AddPlaylistVideo: React.FC<AddPlaylistVideoPropsType> = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { ...state } = useAppSelector(state => state.videos);
	const [formStep, setFormStep] = useState<boolean>(true);

	const handleSelectBtnClick = (): void => { setFormStep(false) };
	const handleSave = () => {
		dispatch(setPlaylist());

		navigate('/video/playlist/');
	};

	useEffect((): void => {
		dispatch(getVideos('all'));
	}, [])

	return (
		<ContainerProfile maxWidth='920px'>
			<>
				<HeaderAddPage
					title={state.titleAddPlaylist}
					titleBtn={state.titleSaveBtn}
					disabledBtn={state.disabledBtn}
					handleSave={handleSave}
				/>
				<div className="add-playlist__body">
					<FormPlaylistVideo
						handleBtnClick={handleSelectBtnClick}
						className={`add-playlist__form ${formStep ? 'active' : ''}`} />
					<SearchPlaylistVideo className={`add-playlist__list ${formStep ? '' : 'active'}`} />
				</div>
			</>
		</ContainerProfile>
	)
}

export default AddPlaylistVideo;