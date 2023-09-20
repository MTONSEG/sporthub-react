import React from "react";
import './LatestHome.scss';
import VideoList from "../../..//common/VideoList/VideoList";
import ContainerMain from '../../../containers/ContainerMain/ContainerMain';

type LatestPropsType = {
	title: string
}

const LatestHome: React.FC<LatestPropsType> = ({ title }) => {
	return (
		<ContainerMain>
			<VideoList title={title} />
		</ContainerMain>
	)
}

export default LatestHome;