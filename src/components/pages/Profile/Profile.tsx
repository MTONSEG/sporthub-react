import React, { useEffect, useState } from 'react';
import './Profile.scss';
import Input from '../../ui/forms/Input/Input';
import ContainerProfile from '../../containers/ContainerProfile/ContainerProfile';
import RadioList from '../../ui/forms/RadioList/RadioList';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { deletePhoto, deletePoster, fetchPersonalData, setAddressValue, setBodValue, setBusinessNameValue, setDescriptionValue, setFacebookValue, setFirstNameValue, setGenderValue, setInstagramValue, setLastNameValue, setPersonalData, setTwitterValue, setVimeoValue } from '../../../redux/slices/auth/personalSlice';
import { BaseUser } from '../../containers/Main/Main';
import { Button } from '../../ui/buttons/Button/Button';
import { Title } from '../../ui/atoms/Title/Title';
import Textarea from '../../ui/forms/Textarea/Textarea';
import UploadImage from '../../ui/forms/UploadImage/UploadImage';
import { uploadImage } from '../../../utils/handleUploadImage';
import { setNameCurrentUser, setPhotoURLCurrentUser } from '../../../redux/slices/auth/singinSlice';

const Profile: React.FC = () => {
	const [userLS, setUserLS] = useState<BaseUser>();
	const [photoFile, setPhotoFile] = useState<File | null>();
	const [posterFile, setPosterFile] = useState<File | null>();
	const { firstName, lastName, address, description, vimeo, facebook, instagram, twitter, businessName, birthday, radio, loading, ...state } = useAppSelector(state => state.personalAuth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		let user: BaseUser = JSON.parse(localStorage.getItem('sh-current'));
		setUserLS(user);
		dispatch(fetchPersonalData(user.uid));
	}, [])

	const handleSave = () => {
		let newUserLS: BaseUser = {
			...userLS,
			name: firstName.value,

		}

		if (posterFile && state.posterPreviewURL) {
			uploadImage(userLS.uid, posterFile, posterFile.name);
		}

		if (!state.posterPreviewURL) {
			dispatch(deletePoster(userLS.uid));
			setPosterFile(null);
		}

		if (photoFile && state.photoPreviewURL) {
			uploadImage(userLS.uid, photoFile, photoFile.name, true)
				.then(res => {
					newUserLS.photoURL = res;
					dispatch(setPhotoURLCurrentUser(res));
					localStorage.setItem('sh-current', JSON.stringify(newUserLS));
				});
		}

		if (!state.photoPreviewURL) {
			newUserLS.photoURL = '';
			dispatch(deletePhoto(userLS.uid));
			dispatch(setPhotoURLCurrentUser(''));
			setPhotoFile(null);
			localStorage.setItem('sh-current', JSON.stringify(newUserLS));
		}

		dispatch(setNameCurrentUser(firstName.value));
		dispatch(setPersonalData(userLS.uid));
	}

	// if (loading) return <Loading />

	return (
		<ContainerProfile>
			<div className='profile'>
				<div className="profile__head">
					<Title text={state.title} />
					<Button className='profile__save-btn' onClickHandler={handleSave}>{state.btnProfile}</Button>
				</div>
				<div className="profile__image-load">
					<UploadImage
						type='photo'
						fileName={state.photoFileName}
						previewURL={state.photoPreviewURL}
						setFile={setPhotoFile}
					/>
					<UploadImage
						fileName={state.posterFileName}
						previewURL={state.posterPreviewURL}
						setFile={setPosterFile}
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