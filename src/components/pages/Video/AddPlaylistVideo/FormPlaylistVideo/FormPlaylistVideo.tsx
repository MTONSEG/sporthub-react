import React, { useEffect } from 'react';
import './FormPlaylistVideo.scss';
import Input from '../../../../ui/forms/Input/Input';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { disableBtnSave, enableBtnSave, removeVideoFromPlaylist, setCategoryPlaylistValue, setDescriptionPlaylistValue, setTitlePlaylistValue } from '../../../../../redux/slices/video/videoSlice';
import Select from '../../../../ui/forms/Select/Select';
import Textarea from '../../../../ui/forms/Textarea/Textarea';
import { Button } from '../../../../ui/buttons/Button/Button';

type FormPlaylistVideoPropsType = {
	className?: string,
	handleBtnClick?: () => void
}

const FormPlaylistVideo: React.FC<FormPlaylistVideoPropsType> = ({
	className, handleBtnClick
}) => {
	const { videosList, ...state } = useAppSelector(state => state.videos);
	const dispatch = useAppDispatch();

	useEffect((): void => {
		const isTrue: boolean =
			state.titlePlaylist.value.length > 0 &&
			state.categoryPlaylist.value.length > 0 &&
			state.descriptionPlaylist.value.length > 0 &&
			state.currentPlaylist.length > 0;

		if (isTrue) {
			dispatch(enableBtnSave());
		} else {
			dispatch(disableBtnSave());
		}

	}, [state.titlePlaylist, state.categoryPlaylist, state.descriptionPlaylist, state.currentPlaylist])

	return (
		<div className={className}>
			<Input
				mb='0'
				className='form-add-playlist__field'
				title={state.titlePlaylist.title}
				value={state.titlePlaylist.value}
				placeholder={state.titlePlaylist.placeholder}
				setStateValue={setTitlePlaylistValue}
			/>
			<Textarea
				className='form-add-playlist__field'
				title={state.descriptionPlaylist.title}
				value={state.descriptionPlaylist.value}
				placeholder={state.descriptionPlaylist.placeholder}
				setStateValue={setDescriptionPlaylistValue}
			/>
			<Select
				title={state.categoryPlaylist.title}
				placeholder={state.categoryPlaylist.placeholder}
				value={state.categoryPlaylist.value}
				list={state.categoryPlaylist.list}
				setStateValue={setCategoryPlaylistValue}
			/>

			{
				state.currentPlaylist.length
					? <div className='form-add-playlist__selected'>
						<p className="form-add-playlist__list-title">Selected</p>
						<ul className="form-add-playlist__list">
							{
								state.currentPlaylist.map(el => (
									<li className='form-add-playlist__item' key={el.uid}>
										<span className='form-add-playlist__item-text'>
											{el.title}
										</span>
										<span
											onClick={
												() => dispatch(removeVideoFromPlaylist(el.uid))
											}
											className='form-add-playlist__item-close'></span>
									</li>
								))
							}
						</ul>
					</div>
					: <></>
			}

			<Button
				onClickHandler={handleBtnClick}
				variant='black'
				className='form-add-playlist__btn'>Select video</Button>
		</div>
	)
}

export default FormPlaylistVideo;