import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './UploadPoster.scss';
import { useAppSelector } from '../../../../hooks/hooks';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { BaseUser } from '../../../containers/Main/Main';
import { NumStrNullType } from '../../../../redux/slices/auth/singupSlice';

type UploadPosterPropsType = {
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
	previewURL: string,
	fileName: string,
}



const UploadPoster: React.FC<UploadPosterPropsType> = ({
	handleChange, previewURL, fileName
}) => {
	const [uid, setUID] = useState<NumStrNullType>();
	const { uploadPoster } = useAppSelector(state => state.personalAuth);
	const storage = getStorage();
	const inputRef = useRef<HTMLInputElement>();

	useEffect(() => {
		const user: BaseUser = JSON.parse(localStorage.getItem('sh-current'));
		setUID(user.uid);
	}, [])

	const handleClick = (): void => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	}

	return (
		<div className={`upload-poster${previewURL ? ' loaded' : ''}`}>
			<label className={`upload-poster__label`}>

				<input
					ref={inputRef}
					className='upload-poster__input'
					type="file"
					accept={uploadPoster.accept}
					capture
					onChange={handleChange}
				/>

				<div className="upload-poster__image-wrap">
					<span className='upload-poster__icon'></span>
					{
						previewURL
							? <img src={previewURL} alt="" className='upload-poster__image' />
							: <></>
					}
				</div>

				<div className={`upload-poster__placeholder`}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>

			</label>
			<div className="upload-poster__text-wrap">
				{
					fileName && previewURL
						? <h2 className="upload-poster__title upload-poster__title_name">
							<span className='upload-poster__title-icon'></span>
							<span>{fileName}</span>
						</h2>
						: <h2 className="upload-poster__title">
							{uploadPoster.title}
						</h2>
				}

				<p className="upload-poster__text">
					{uploadPoster.text}
				</p>
			</div>
		</div>
	)
}

export default UploadPoster;