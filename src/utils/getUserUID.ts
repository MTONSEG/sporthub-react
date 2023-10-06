import { BaseUser } from '../components/containers/Main/Main';

export const getUserUID = (): BaseUser => {
	const user: BaseUser = JSON.parse(localStorage.getItem('sh-current'));
	return user;
}