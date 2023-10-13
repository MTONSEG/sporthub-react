import React from 'react';
import { VideoFileType } from '../../../../../redux/slices/video/videoSlice';
import { useAppDispatch } from '../../../../../hooks/hooks';

type SelectedListPropsType = {
	list: VideoFileType[],
	handleRemove: (uid: string | number) => void
}

const SelectedList: React.FC<SelectedListPropsType> = ({ list, handleRemove }) => {

	return <>

	</>
}

export default SelectedList;