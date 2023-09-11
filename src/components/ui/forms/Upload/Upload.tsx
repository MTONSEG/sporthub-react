import React, { CSSProperties, ChangeEvent, ChangeEventHandler, useState } from "react";
import './Upload.scss';
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setMessage, setVarianError, setVarianMess, showAlert } from "../../../../redux/slices/alert/alertSlice";
import { getClearMessage } from "../../../../utils/getErrorMessage";
import { Auth, updateProfile } from "firebase/auth";
import { update, ref as databaseRef } from "firebase/database";
import { getDownloadURL, getStorage, ref, ref as storageRef, uploadBytes } from "firebase/storage";
import { ICurrent } from "../../../../redux/slices/auth/singupSlice";


interface uploadType {
	title: string,
	text: string,
	mb?: string,
	img?: string | null,
	accept?: string,
	auth?: Auth,
	current?:ICurrent,
	userRef?: any
}
export interface IAdditionalData {
	displayName?: string,
	photoURL?: string,
	gender?: string,
	bod?: string,
}


const Upload: React.FC<uploadType> = ({
	title,
	text,
	mb = '0',
	accept = '',
	userRef,
	current
}) => {

	const alert = useAppSelector(state => state.alert);

	const [imageUrl, setImageUrl] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const storage = getStorage();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();


	const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) return;

		setLoading(true);

		const selectedFile = e.target.files[0];

		if (selectedFile) {
			try {
				const storageRef = ref(storage, `image/${selectedFile.name}`);
				const snapshot = await uploadBytes(storageRef, selectedFile);

				dispatch(setMessage(alert.photo))
				dispatch(showAlert(true));

				setTimeout((): void => {
					dispatch(showAlert(false));
				}, 5000)

				const downloadURL = await getDownloadURL(storageRef);
				setImageUrl(downloadURL);
				setLoading(false);
				update(userRef, { imageUrl: downloadURL });
				
				// console.log(current);

			} catch (error) {
				dispatch(setVarianError());
				dispatch(setMessage(getClearMessage(error.code)));
				dispatch(showAlert(true));

				setTimeout((): void => {
					dispatch(showAlert(false));
					dispatch(setVarianMess());
				}, 3000)
			}
		}


		
	}

	const style: CSSProperties = {
		marginBottom: mb
	}

	return (
		<div className="upload-field" style={style}>
			<label className={`upload-field__label ${loading && 'loading-file'}`}>
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
