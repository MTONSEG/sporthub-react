import React, { useEffect, useState } from 'react';
import './AddVideo.scss';
import ContainerProfile from '../../../containers/ContainerProfile/ContainerProfile';
import HeaderAddPage from './HeaderAddPage/HeaderAddPage';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import UploadVideo from '../../../ui/forms/UploadVideo/UploadVideo';
import FormAddVideo from './FormAddVideo/FormAddVideo';
import { NumStrNullType } from '../../../../redux/slices/auth/singupSlice';
import { BaseUser } from '../../../containers/Main/Main';
import { getUserUID } from '../../../../redux/slices/auth/getUserUID';
import { db, storage } from '../../../../initializeFirebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { formatNameFile } from '../../../../utils/formatNameFile';
import { ref as refDB, update } from 'firebase/database';
import { setVideoURL, uploadVideo } from '../../../../redux/slices/video/videoSlice';

const AddVideo: React.FC = () => {
	const dispatch = useAppDispatch();
	const { ...state } = useAppSelector(state => state.videos);


	const handleSave = async (): Promise<void> => {
		dispatch(uploadVideo(getUserUID()));
	}

	return (
		<ContainerProfile maxWidth='920px'>
			<>
				<HeaderAddPage
					title={state.titleAdding}
					titleBtn={state.titlePublishBtn}
					handleSave={handleSave}
				/>
				<UploadVideo />
				<FormAddVideo />
			</>
		</ContainerProfile>
	)
}

export default AddVideo;