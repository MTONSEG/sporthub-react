import React, { useRef, DragEvent, useState, ChangeEvent, useEffect } from 'react';
import './UploadVideo.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { enableBtnSave, setVideoFileName, setVideoURL } from '../../../../redux/slices/video/videoSlice';
import { getUserUID } from '../../../../utils/getUserUID';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../initializeFirebase';
import { NumStrNullType } from '../../../../redux/slices/auth/singupSlice';
import LoaderUploadVideo from './LoaderUploadVideo/LoaderUploadVideo';
import VideoPlayer from '../../../common/VideoPlayer/VideoPlayer';
import PlaceholderUploadVideo from './PlaceholderUploadVideo/PlaceholderUploadVideo';

type UploadVideoPropsType = {
	userUID?:NumStrNullType
}

const UploadVideo: React.FC<UploadVideoPropsType> = ({userUID }) => {
	const { ...state } = useAppSelector(state => state.videos);
	const inputRef = useRef<HTMLInputElement>();
	const [drag, setDrag] = useState<boolean>();
	const [uid, setUID] = useState<NumStrNullType>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!userUID) {
			setUID(getUserUID().uid);
		} else {
			setUID(userUID)
		}
		
	}, [])

	const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		setDrag(true);
	}

	const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		setDrag(false);
	}

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDrag(false);
		if (!e.dataTransfer.files?.length) return;

		const file: File = e.dataTransfer.files[0];
		addVideoProcess(file);
	}

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.currentTarget.files?.length) return;

		const file: File = e.currentTarget.files[0];
		addVideoProcess(file);
	}

	async function addVideoProcess(file: File) {
		dispatch(setVideoFileName(file.name));

		const storageRef = ref(storage, `videos/${uid}/${file.name}`);
		await uploadBytes(storageRef, file).then(res => {

		});
		await getDownloadURL(storageRef).then(url => {
			dispatch(setVideoURL(url));
			dispatch(enableBtnSave())
		});
	}

	return (
		<div className={`upload-video${drag ? ' drag' : ''}`}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
		>
			{
				!state.videoURL
					? <PlaceholderUploadVideo
						title={state.titleDrag}
						titleBtn={state.titleChooseBtn}
						inputRef={inputRef}
						handleChange={handleChange}
					/>
					:
					<></>
			}
			{
				state.videoFileName && !state.videoURL
					? <LoaderUploadVideo
						title={state.titleProcessing}
						fileName={state.videoFileName}
					/>
					: <></>
			}
			{
				state.videoURL
					? <VideoPlayer videoSrc={state.videoURL} posterSrc={state.videoPosterURL} />
					: <></>}
		</div>
	)
}

export default UploadVideo;