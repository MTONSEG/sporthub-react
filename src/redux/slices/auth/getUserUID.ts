import { BaseUser } from '../../../components/containers/Main/Main';
import { NumStrNullType } from './singupSlice';

export const getUserUID = (): NumStrNullType => {
	const user: BaseUser = JSON.parse(localStorage.getItem('sh-current'));
	return user.uid
}