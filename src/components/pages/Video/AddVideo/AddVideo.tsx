import React from 'react';
import './AddVideo.scss';
import ContainerProfile from '../../../containers/ContainerProfile/ContainerProfile';
import HeaderAddPage from './HeaderAddPage/HeaderAddPage';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import UploadVideo from '../../../ui/forms/UploadVideo/UploadVideo';
import FormAddVideo from './FormAddVideo/FormAddVideo';
import { getUserUID } from '../../../../redux/slices/auth/getUserUID';
import { disableBtnSave, uploadVideo } from '../../../../redux/slices/video/videoSlice';
import { getUsers } from '../../../../redux/slices/home/userSlice';

const AddVideo: React.FC = () => {
	const dispatch = useAppDispatch();
	const { ...state } = useAppSelector(state => state.videos);

	const handleSave = (): void => {
		if (state.videoURL) {
			dispatch(uploadVideo(getUserUID().uid));
			dispatch(disableBtnSave());
			dispatch(getUsers());
		}
	}

	return (
		<ContainerProfile maxWidth='920px'>
			<>
				<HeaderAddPage
					title={state.titleAdding}
					titleBtn={state.titlePublishBtn}
					disabledBtn={state.disabledBtn}
					handleSave={handleSave}
				/>
				<UploadVideo />
				<FormAddVideo />
			</>
		</ContainerProfile>
	)
}

export default AddVideo;