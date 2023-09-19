import React from "react";
import './LatestHome.scss';
import VideoList from "../../..//common/VideoList/VideoList";
import { useAppSelector } from "../../../../hooks/hooks";

type LatestPropsType = {
	title: string
}

const LatestHome:React.FC<LatestPropsType> = ({title}) => {
	const titleList = useAppSelector(state => state.videoList.title);
	return (
		<VideoList title={title} />
	)
}

export default LatestHome;