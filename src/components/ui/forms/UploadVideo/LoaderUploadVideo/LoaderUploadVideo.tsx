import React from 'react';
import { formatNameFile } from '../../../../../utils/formatNameFile';

type LoaderUploadVideoPropsType = {
	title: string,
	fileName: string,
}

const LoaderUploadVideo: React.FC<LoaderUploadVideoPropsType> = ({
	title, fileName
}) => {
	return (
		<div className="upload-video__loader">
			<h2 className="upload-video__loader-title">
				{title}
			</h2>
			<p className="upload-video__loader-file-name">
				{formatNameFile(fileName)}
			</p>
		</div>
	)
}

export default LoaderUploadVideo;