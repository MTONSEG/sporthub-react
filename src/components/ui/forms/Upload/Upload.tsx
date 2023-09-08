import React, { CSSProperties, ChangeEvent, ChangeEventHandler, useState } from "react";
import './Upload.scss';

interface uploadType {
	title: string,
	text: string,
	mb?: string,
	img?: string | null,
	accept?: string
}


const Upload: React.FC<uploadType> = ({
	title,
	text,
	img,
	mb = '0',
	accept = ''
}) => {
	const [file, setFile] = useState<File | null>(null);
	const [imageUrl, setImageUrl] = useState<string>();

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		if (!e.target.files.length) return;

		const selectedFile = e.target.files && e.target.files[0];
		if (selectedFile) setFile(file);

		const reader = new FileReader();

		reader.onload = async e => {
			if (e.target && e.target.result) {
				setImageUrl(e.target.result as string);
			}
		}

		reader.readAsDataURL(file);
	}

	const style: CSSProperties = {
		marginBottom: mb
	}

	return (
		<div className="upload-field" style={style}>
			<label className="upload-field__label">
				<input
					type="file"
					className="upload-field__input"
					accept={accept}
					onChange={(e) => onChangeHandler(e)}
				/>
				{imageUrl
					? <img src={imageUrl} alt="image" className="upload-field__image" />
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
