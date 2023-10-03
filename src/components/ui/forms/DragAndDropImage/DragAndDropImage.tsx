import React, { useRef, DragEvent, useState, ChangeEvent, useEffect } from 'react';
import './DragAndDropImage.scss';
import icon from '../../../../assets/icons/upload-video.svg';
import { Button } from '../../buttons/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { NumStrNullType } from '../../../../redux/slices/auth/singupSlice';
import { getUserUID } from '../../../../redux/slices/auth/getUserUID';
import { setVideoPosterURL} from '../../../../redux/slices/video/videoSlice';
import { storage } from '../../../../initializeFirebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const DragAndDropImage: React.FC = () => {
	const { ...state } = useAppSelector(state => state.videos);
	const inputRef = useRef<HTMLInputElement>();
	const [drag, setDrag] = useState<boolean>();
	const [uid, setUID] = useState<NumStrNullType>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		setUID(getUserUID().uid);
	}, [])

	const handlerChooseClick = (): void => {
		inputRef.current.click();
	}

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
		addPosterVideoProcess(file);
	}

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.currentTarget.files?.length) return;

		const file: File = e.currentTarget.files[0];
		addPosterVideoProcess(file);
	}

	async function addPosterVideoProcess(file: File) {
		const storageRef = ref(storage, `posters/${uid}/${file.name}`);
		await uploadBytes(storageRef, file);
		await getDownloadURL(storageRef).then(url => {
			dispatch(setVideoPosterURL(url));
		});
	}

	return (
		<div className={`drag-drop${drag ? ' drag' : ''}`}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
		>
			{
				!state.videoPosterURL
					? <label className="drag-drop__body">
						<input
							ref={inputRef}
							type="file" className="drag-drop__input"
							onChange={handleChange}
						/>
						<img src={icon} alt="" className="drag-drop__icon" />
						<h2 className="drag-drop__title">
							{state.titleDrag}
						</h2>
						<h2 className="drag-drop__title drag-drop__title_mob">
							{state.titlePreviewMob}
						</h2>
						<p className="drag-drop__text">{state.textUpload}</p>

						<Button
							className='drag-drop__choose-btn'
							onClickHandler={handlerChooseClick}
						>{state.titleChooseBtn}</Button>
					</label>
					: <img src={state.videoPosterURL} alt="poster" className='drag-drop__poster' />
			}
		</div>
	)
}

export default DragAndDropImage;