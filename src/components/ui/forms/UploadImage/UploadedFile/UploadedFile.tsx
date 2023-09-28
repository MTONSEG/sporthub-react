import React from 'react';
import './UploadedFile.scss';
import { Icon } from '../../../atoms/Icon/Icon';
import { formatNameFile } from '../../../../../utils/formatNameFile';

type UploadedFilePropsType = {
	fileName: string,
	btnText: string,
	handleClick: () => void,
	handleChange: () => void
}

const UploadedFile: React.FC<UploadedFilePropsType> = ({
	fileName, btnText, handleClick, handleChange
}) => {
	return (
		<div className='upload-image__uploaded'>
			<div className="upload-image__uploaded-body">
				<h2 className="upload-image__title upload-image__title_name">
					<span className='upload-image__title-icon'></span>
					<span>{formatNameFile(fileName)}</span>
				</h2>
				<button
					className="upload-image__change-btn"
					onClick={handleChange}
				>
					{btnText}
				</button>
			</div>

			<button
				className='upload-image__remove-btn'
				onClick={handleClick}
			>
				<Icon id='cart' className='upload-image__remove-btn-icon' />
			</button>
		</div>
	)
}

export default UploadedFile;