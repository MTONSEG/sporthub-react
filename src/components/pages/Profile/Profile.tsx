import React, { ChangeEvent, useEffect, useState } from 'react';
import './Profile.scss';
import Input from '../../ui/forms/Input/Input';
import ContainerProfile from '../../containers/ContainerProfile/ContainerProfile';
import RadioList from '../../ui/forms/RadioList/RadioList';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchPersonalData, setAddressValue, setBodValue, setBusinessNameValue, setDescriptionValue, setFacebookValue, setFirstNameValue, setGenderValue, setInstagramValue, setLastNameValue, setPersonalData, setTwitterValue, setVimeoValue } from '../../../redux/slices/auth/personalSlice';
import { BaseUser } from '../../containers/Main/Main';
import Loading from '../../ui/atoms/Loading/Loading';
import { NumStrNullType } from '../../../redux/slices/auth/singupSlice';
import { Button } from '../../ui/atoms/Button/Button';
import { Title } from '../../ui/atoms/Title/Title';
import Textarea from '../../ui/forms/Textarea/Textarea';
import Upload from '../../ui/forms/Upload/Upload';
import UploadPoster from '../../ui/forms/UploadPoster/UploadPoster';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { getDatabase, update, ref as dbRef } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const Profile: React.FC = () => {
	const [uid, setUid] = useState<NumStrNullType>();
	const [posterFile, setPosterFile] = useState<File | null>();
	const [posterFileName, setPosterFileName] = useState<string>();
	const [posterPreviewURL, setPosterPreviewURL] = useState<string>();
	const { firstName, lastName, address, description, vimeo, facebook, instagram, twitter, businessName, birthday, radio, loading, ...state } = useAppSelector(state => state.personalAuth);
	const dispatch = useAppDispatch();
	const storage = getStorage();
	const db = getDatabase();

	useEffect(() => {
		let base: BaseUser = JSON.parse(localStorage.getItem('sh-current'));
		setUid(base.uid);
		dispatch(fetchPersonalData(base.uid));

	}, [])

	const handleSave = () => {
		dispatch(setPersonalData(uid));

		const uploadPoster = async () => {
			const storageRef = ref(storage, `images/${uid}/${posterFile.name}`);
			const snapshot = await uploadBytes(storageRef, posterFile);
			const downloadURL = await getDownloadURL(storageRef);
			const userRef = dbRef(db, `users/${uid}`);

			update(userRef, { posterURL: downloadURL });
		}

		uploadPoster();
	}

	const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.currentTarget.files?.length) return;
		
		let file: File = e.currentTarget.files[0];
		
		setPosterFile(file);
		setPosterFileName(file.name)

		console.log(file);

		const reader = new FileReader();

		reader.onload = (e) => {
			setPosterPreviewURL(e.target.result as string);
			console.log('load complete')
		}	

		reader.readAsDataURL(file);
	}

	if (loading) return <Loading />

	return (
		<ContainerProfile>
			<div className='profile'>
				<div className="profile__head">
					<Title text={state.title} />
					<Button className='profile__save-btn' onClickHandler={handleSave}>{state.btnProfile}</Button>
				</div>
				<div className="profile__image-load">
					<UploadPoster
						fileName={posterFileName}
						previewURL={posterPreviewURL}
						handleChange={handleChangeFile}
					/>
				</div>
				<div className="profile__form">
					<Input
						mb='0'
						title={firstName.title}
						placeholder={firstName.placeholder}
						value={firstName.value}
						setStateValue={setFirstNameValue} />
					<RadioList
						className='profile__radio-field'
						list={radio.list}
						title={radio.title}
						current={radio.value}
						setStateCurrent={setGenderValue} />
					<Input
						mb='0'
						title={lastName.title}
						placeholder={lastName.placeholder}
						value={lastName.value}
						setStateValue={setLastNameValue} />
					<Input
						mb='0'
						title={birthday.title}
						placeholder={birthday.placeholder}
						value={birthday.value}
						setStateValue={setBodValue}
						dateMask={birthday.dateMask}
						maskChar={birthday.maskChar}
					/>
					<Input
						mb='0'
						title={address.title}
						placeholder={address.placeholder}
						value={address.value}
						setStateValue={setAddressValue} />
					<Input
						mb='0'
						title={businessName.title}
						placeholder={businessName.placeholder}
						value={businessName.value}
						setStateValue={setBusinessNameValue} />
					<Textarea
						mb='0'
						className='profile__description-field'
						title={description.title}
						placeholder={description.placeholder}
						value={description.value}
						setStateValue={setDescriptionValue} />
					<Input
						mb='0'
						title={vimeo.title}
						placeholder={vimeo.placeholder}
						value={vimeo.value}
						setStateValue={setVimeoValue} />
					<Input
						mb='0'
						title={instagram.title}
						placeholder={instagram.placeholder}
						value={instagram.value}
						setStateValue={setInstagramValue} />
					<Input
						mb='0'
						title={facebook.title}
						placeholder={facebook.placeholder}
						value={facebook.value}
						setStateValue={setFacebookValue} />
					<Input
						mb='0'
						title={twitter.title}
						placeholder={twitter.placeholder}
						value={twitter.value}
						setStateValue={setTwitterValue} />
				</div>
			</div>
		</ContainerProfile>
	)
}

export default Profile;