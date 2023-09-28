import { BaseUser } from '../../../components/containers/Main/Main';

export const setLSPhotoURL = (url: string): void => {
	let currentLS: BaseUser = JSON.parse(localStorage.getItem('sh-current'));
	let newLS: BaseUser = { ...currentLS, photoURL: url };

	localStorage.setItem('sh-current', JSON.stringify(newLS));
}