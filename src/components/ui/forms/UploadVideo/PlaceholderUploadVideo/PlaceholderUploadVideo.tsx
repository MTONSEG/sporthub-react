import React, { ChangeEvent } from 'react';
import { formatNameFile } from '../../../../../utils/formatNameFile';
import icon from '../../../../../assets/icons/upload-video.svg';
import { Button } from '../../../buttons/Button/Button';

type PlaceholderUploadVideoPropsType = {
	title: string,
	titleBtn: string,
	inputRef: React.RefObject<HTMLInputElement>,
	handleChange: (e:ChangeEvent<HTMLInputElement>) => Promise<void>,
}

const PlaceholderUploadVideo: React.FC<PlaceholderUploadVideoPropsType> = ({
	title, titleBtn, inputRef, handleChange
}) => {
	const handlerChooseClick = (): void => {
		inputRef.current.click();
	}

	return (
		<div className="upload-video__body">
			<img src={icon} alt="" className="upload-video__icon" />
			<h2 className="upload-video__placeholder-title">
				{title}
			</h2>
			<label className='upload-video__label'>
				<input
					ref={inputRef}
					type="file"
					className="upload-video__input"
					onChange={handleChange}
				/>
				<Button
					className='upload-video__choose-btn'
					onClickHandler={handlerChooseClick}
				>{titleBtn}</Button>
			</label>
		</div>
	)
}

export default PlaceholderUploadVideo;