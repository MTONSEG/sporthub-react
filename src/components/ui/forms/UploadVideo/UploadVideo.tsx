import React, { useRef, DragEvent, useState, ChangeEvent } from 'react';
import './UploadVideo.scss';
import icon from '../../../../assets/icons/upload-video.svg';
import { Button } from '../../buttons/Button/Button';
import { useAppSelector } from '../../../../hooks/hooks';

const UploadVideo: React.FC = () => {
	const { ...state } = useAppSelector(state => state.videos);
	const inputRef = useRef<HTMLInputElement>();
	const [drag, setDrag] = useState<boolean>();
	const [drop, setDrop] = useState<boolean>();

	const handlerChooseClick = (): void => {
		inputRef.current.click();
	}

	const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		setDrag(true);
		console.log('grag and over');
	}

	const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		setDrag(false);
		console.log('drag leave')
	}

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDrag(false);
		setDrop(true);
		console.log('drop');
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

	}

	return (
		<div className={`upload-video${drag ? ' drag' : ''}${drop ? ' drop' : ''}`}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
		>
			<div className="upload-video__body">
				<img src={icon} alt="" className="upload-video__icon" />
				<h2 className="upload-video__placeholder-title">
					{state.titleDrag}
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
					>{state.titleChooseBtn}</Button>
				</label>
			</div>
		</div>
	)
}

export default UploadVideo;