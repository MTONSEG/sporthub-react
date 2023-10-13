import React, { useEffect } from "react";
import './LatestHome.scss';
import VideoList from "../../..//common/VideoList/VideoList";
import ContainerMain from '../../../containers/ContainerMain/ContainerMain';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import Loading from '../../../ui/atoms/Loading/Loading';
import { getVideos } from '../../../../redux/slices/video/videoSlice';

type LatestPropsType = {
	title: string
}

const LatestHome: React.FC<LatestPropsType> = ({ title }) => {
	const { videosList } = useAppSelector(state => state.videos);
	const titleLatest = useAppSelector(state => state.videoList.titleLatest);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getVideos('all'));
	}, [])

	
	return (
		<ContainerMain>
			<React.Suspense fallback={<Loading/>} >
				<VideoList title={titleLatest} videos={videosList} authorView={true} />
			</React.Suspense>
		</ContainerMain>
	)
}

export default LatestHome;