import React, { useEffect, useState } from 'react';
import './EditPlaylistVideo.scss';
import ContainerProfile from '../../../containers/ContainerProfile/ContainerProfile';
import HeaderAddPage from '../AddVideo/HeaderAddPage/HeaderAddPage';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { getCurrentPlaylist, getVideos, initialPlaylistVideoEdit, setCategoryPlaylistValueForTitle, setDescriptionPlaylistValue, setEditPlaylist, setPlaylist, setTitlePlaylistValue, updatePlaylist } from '../../../../redux/slices/video/videoSlice';
import { useNavigate, useParams } from 'react-router-dom';
import FormPlaylistVideo from '../FormPlaylistVideo/FormPlaylistVideo';
import SearchPlaylistVideo from '../SearchPlaylistVideo/SearchPlaylistVideo';
import Loading from '../../../ui/atoms/Loading/Loading';

type EditPlaylistVideoPropsType = {}

const EditPlaylistVideo: React.FC<EditPlaylistVideoPropsType> = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { playlistView,videosList,searchVideosList, ...state } = useAppSelector(state => state.videos);
	const [formStep, setFormStep] = useState<boolean>(true);
	const { uid } = useParams()

	const handleSelectBtnClick = (): void => { setFormStep(false) };

	const handleSave = () => {
		dispatch(updatePlaylist(uid));
		dispatch(getCurrentPlaylist(uid));
	};

	useEffect((): void => {
		dispatch(getCurrentPlaylist(uid));
		dispatch(getVideos('all'));
	}, [])

	if (!playlistView || !videosList || !searchVideosList) return <Loading />
	
	return (
		<ContainerProfile maxWidth='920px'>
			<>
				<HeaderAddPage
					title={state.titleAddPlaylist}
					titleBtn={state.titleSaveBtn}
					path={`/video/playlist/${uid}`}
					handleSave={handleSave}
				/>
				<div className="add-playlist__body">
					<FormPlaylistVideo
						edit
						handleBtnClick={handleSelectBtnClick}
						className={`add-playlist__form ${formStep ? 'active' : ''}`} />
					<SearchPlaylistVideo
						edit
						className={`add-playlist__list ${formStep ? '' : 'active'}`} />
				</div>
			</>
		</ContainerProfile>
	)
}

export default EditPlaylistVideo;