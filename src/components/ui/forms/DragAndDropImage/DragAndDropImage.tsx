import React, { useRef, DragEvent, useState, ChangeEvent } from 'react';
import './DragAndDropImage.scss';
import icon from '../../../../assets/icons/upload-video.svg';
import { Button } from '../../buttons/Button/Button';
import { useAppSelector } from '../../../../hooks/hooks';

const DragAndDropImage: React.FC = () => {
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
		<div className={`drag-drop${drag ? ' drag' : ''}${drop ? ' drop' : ''}`}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
		>
			<div className="drag-drop__body">
				<img src={icon} alt="" className="drag-drop__icon" />
				<h2 className="drag-drop__title">
					{state.titleDrag}
				</h2>
				<h2 className="drag-drop__title drag-drop__title_mob">
					{state.titlePreviewMob}
				</h2>
				<p className="drag-drop__text">{state.textUpload}</p>
				<label className='drag-drop__label'>
					<input
						ref={inputRef}
						type="file" className="drag-drop__input"
						onChange={handleChange}
					/>
					<Button
						className='drag-drop__choose-btn'
						onClickHandler={handlerChooseClick}
					>{state.titleChooseBtn}</Button>
				</label>
			</div>

		</div>
	)
}

export default DragAndDropImage;