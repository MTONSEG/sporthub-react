import React from 'react';
import './EmptyFile.scss';

type EmptyFilePropsType = {
	title: string,
	text: string,
}

const EmptyFile: React.FC<EmptyFilePropsType> = ({
	title, text
}) => {
	return (
		<>
			<h2 className="upload-image__title">
				{title}
			</h2>
			<p className="upload-image__text">
				{text}
			</p>
		</>
	)
}

export default EmptyFile;