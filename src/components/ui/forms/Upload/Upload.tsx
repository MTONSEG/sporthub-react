import React, { CSSProperties } from "react";
import './Upload.scss';

interface uploadType {
	title: string,
	text: string,
	mb?: string,
	img?: string | null
}


const Upload: React.FC<uploadType> = ({
	title,
	text,
	img,
	mb = '0'
}) => {
	const style: CSSProperties = {
		marginBottom: mb
	}
	return (
		<div className="upload-field" style={style}>
			<label className="upload-field__label">
				<input type="file" className="upload-field__input" />
				{img
					? <img src={img} alt="image" className="upload-field__image" />
					: <></>
				}
			</label>

			<div className="upload-field__body">
				<h2 className="upload-field__title">{title}</h2>
				<p className="upload-field__text">{text}</p>
			</div>
		</div>
	)
}

export default Upload;
