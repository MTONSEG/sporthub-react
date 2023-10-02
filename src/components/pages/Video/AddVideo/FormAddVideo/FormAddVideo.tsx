import React from 'react';
import './FormAddVideo.scss';
import DragAndDropImage from '../../../../ui/forms/DragAndDropImage/DragAndDropImage';
import Input from '../../../../ui/forms/Input/Input';
import { useAppSelector } from '../../../../../hooks/hooks';
import { setCategoryValue, setDescriptionVideoValue, setShopifyURLValue, setTitleValue } from '../../../../../redux/slices/video/videoSlice';
import Textarea from '../../../../ui/forms/Textarea/Textarea';
import Select from '../../../../ui/forms/Select/Select';

const FormAddVideo: React.FC = () => {
	const { ...state } = useAppSelector(state => state.videos);

	return (
		<div className='form-video'>
			<div className="form-video__fields">
				<Input
					mb='0'
					title={state.title.title}
					placeholder={state.title.placeholder}
					value={state.title.value}
					setStateValue={setTitleValue}
				/>
				<Select
					title={state.category.title}
					placeholder={state.category.placeholder}
					value={state.category.value}
					list={state.category.list}
					setStateValue={setCategoryValue}
				/>
				<Textarea
					title={state.description.title}
					placeholder={state.description.placeholder}
					value={state.description.value}
					setStateValue={setDescriptionVideoValue}
				/>

				<Input
					mb='0'
					title={state.shopifyURL.title}
					placeholder={state.shopifyURL.placeholder}
					value={state.shopifyURL.value}
					setStateValue={setShopifyURLValue}
				/>
			</div>
			<DragAndDropImage />
		</div>
	)
}

export default FormAddVideo;