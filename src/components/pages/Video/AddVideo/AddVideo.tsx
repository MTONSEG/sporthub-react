import React, { useEffect } from 'react';
import './AddVideo.scss';
import ContainerProfile from '../../../containers/ContainerProfile/ContainerProfile';
import HeaderAddPage from './HeaderAddPage/HeaderAddPage';
import { useAppSelector } from '../../../../hooks/hooks';
import UploadVideo from '../../../ui/forms/UploadVideo/UploadVideo';
import FormAddVideo from './FormAddVideo/FormAddVideo';

const AddVideo: React.FC = () => {
	const { ...state } = useAppSelector(state => state.videos);

	return (
		<ContainerProfile maxWidth='920px'>
			<>
				<HeaderAddPage
					title={state.titleAdding}
					titleBtn={state.titlePublishBtn}
				/>
				<UploadVideo />
				<FormAddVideo />
			</>
		</ContainerProfile>
	)
}

export default AddVideo;