import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './UploadImage.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { BaseUser } from '../../../containers/Main/Main';
import { NumStrNullType } from '../../../../redux/slices/auth/singupSlice';
import EmptyFile from './EmptyFile/EmptyFile';
import UploadedFile from './UploadedFile/UploadedFile';
import { clearPhoto, clearPoster, setPhotoFile, setPhotoFileName, setPhotoPreviewURL, setPosterFile, setPosterFileName, setPosterPreviewURL } from '../../../../redux/slices/auth/personalSlice';

type UploadImagePropsType = {
	previewURL: string,
	fileName: string,
	type?: 'photo' | 'poster';
}

const UploadImage: React.FC<UploadImagePropsType> = ({ previewURL, fileName, type = 'poster' }) => {
	const [uid, setUID] = useState<NumStrNullType>();
	const { uploadPoster, ...state } = useAppSelector(state => state.personalAuth);
	const inputRef = useRef<HTMLInputElement>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const user: BaseUser = JSON.parse(localStorage.getItem('sh-current'));
		setUID(user.uid);
	}, [])


	const handleChangeFileClick = (): void => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	}

	const handleClear = (): void => {
		if (type === 'photo') dispatch(clearPhoto());
		if (type === 'poster') dispatch(clearPoster());
	}

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.currentTarget.files?.length) return;

		const reader = new FileReader();
		const file: File = e.currentTarget.files[0];

		if (type === 'photo') {
			dispatch(setPhotoFile(file));
			dispatch(setPhotoFileName(file.name));

			reader.onload = (e) => {
				dispatch(setPhotoPreviewURL(e.target.result as string));
			}
		}

		if (type === 'poster') {
			dispatch(setPosterFile(file));
			dispatch(setPosterFileName(file.name));

			reader.onload = (e) => {
				dispatch(setPosterPreviewURL(e.target.result as string));
			}
		}

		reader.readAsDataURL(file);
	}

	return (
		<div className={`upload-image${previewURL ? ' loaded' : ''} ${type}`}>
			<label className={`upload-image__label`}>

				<input
					ref={inputRef}
					className='upload-image__input'
					type="file"
					accept={uploadPoster.accept}
					capture
					onChange={handleChange}
				/>

				<div className="upload-image__image-wrap">
					<span className='upload-image__icon'></span>
					{
						previewURL
							? <img src={previewURL} alt="" className='upload-image__image' />
							: <></>
					}
				</div>

				<div className={`upload-image__placeholder`}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>

			</label>
			<div className="upload-image__text-wrap">
				{
					fileName && previewURL
						? <UploadedFile
							fileName={fileName}
							btnText={state.btnChange}
							handleClick={handleClear}
							handleChange={handleChangeFileClick}
						/>
						: <EmptyFile title={uploadPoster.title} text={uploadPoster.text} />
				}

			</div>
		</div>
	)
}

export default UploadImage;